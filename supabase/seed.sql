-- =========================================================
-- Atomic Learner, Seed data
-- Run this AFTER schema.sql, in the Supabase SQL editor.
--
-- Seeds:
--   - All 5 subjects
--   - Topics for Mathematics
--   - One published assessment: Cambridge O/L Mathematics
--     with 6 placeholder questions across 3 topics
--
-- Replace question text/options with real content when ready.
-- the shape (assessment -> questions -> options) stays the same.
-- =========================================================

-- ---------- Subjects ----------

insert into subjects (slug, name) values
  ('mathematics', 'Mathematics'),
  ('ict', 'ICT'),
  ('physics', 'Physics'),
  ('chemistry', 'Chemistry'),
  ('biology', 'Biology')
on conflict (slug) do nothing;

-- ---------- Topics (Mathematics) ----------

insert into topics (subject_id, name)
select id, topic_name
from subjects, unnest(array[
  'Linear Equations',
  'Algebraic Manipulation',
  'Functions',
  'Coordinate Geometry'
]) as topic_name
where subjects.slug = 'mathematics'
on conflict do nothing;

-- ---------- Assessment: Cambridge O/L Mathematics ----------

insert into assessments (curriculum, level, subject_id, title, is_published)
select 'cambridge', 'ol', id, 'Cambridge O/L Mathematics, Diagnostic', true
from subjects where slug = 'mathematics'
on conflict (curriculum, level, subject_id) do nothing;

-- ---------- Questions ----------

do $$
declare
  v_assessment_id uuid;
  v_topic_linear uuid;
  v_topic_algebra uuid;
  v_topic_functions uuid;
  v_topic_coord uuid;
  v_q_id uuid;
begin
  select id into v_assessment_id from assessments
    where curriculum = 'cambridge' and level = 'ol'
    and subject_id = (select id from subjects where slug = 'mathematics');

  select id into v_topic_linear from topics where name = 'Linear Equations'
    and subject_id = (select id from subjects where slug = 'mathematics');
  select id into v_topic_algebra from topics where name = 'Algebraic Manipulation'
    and subject_id = (select id from subjects where slug = 'mathematics');
  select id into v_topic_functions from topics where name = 'Functions'
    and subject_id = (select id from subjects where slug = 'mathematics');
  select id into v_topic_coord from topics where name = 'Coordinate Geometry'
    and subject_id = (select id from subjects where slug = 'mathematics');

  -- Q1: Linear equations
  insert into questions (assessment_id, topic_id, difficulty, prompt, order_index)
  values (v_assessment_id, v_topic_linear, 'foundation', 'Solve for x: 3x + 7 = 22', 1)
  returning id into v_q_id;
  insert into question_options (question_id, label, is_correct, order_index) values
    (v_q_id, 'x = 4', false, 1),
    (v_q_id, 'x = 5', true, 2),
    (v_q_id, 'x = 6', false, 3),
    (v_q_id, 'x = 7.6', false, 4);

  -- Q2: Linear equations
  insert into questions (assessment_id, topic_id, difficulty, prompt, order_index)
  values (v_assessment_id, v_topic_linear, 'foundation', 'Solve for x: 2(x - 3) = 10', 2)
  returning id into v_q_id;
  insert into question_options (question_id, label, is_correct, order_index) values
    (v_q_id, 'x = 5', false, 1),
    (v_q_id, 'x = 8', true, 2),
    (v_q_id, 'x = 6.5', false, 3),
    (v_q_id, 'x = 4', false, 4);

  -- Q3: Algebraic manipulation
  insert into questions (assessment_id, topic_id, difficulty, prompt, order_index)
  values (v_assessment_id, v_topic_algebra, 'intermediate', 'Simplify: 3(x + 2) - 2(x - 1)', 3)
  returning id into v_q_id;
  insert into question_options (question_id, label, is_correct, order_index) values
    (v_q_id, 'x + 8', true, 1),
    (v_q_id, 'x + 4', false, 2),
    (v_q_id, '5x + 4', false, 3),
    (v_q_id, 'x + 6', false, 4);

  -- Q4: Algebraic manipulation
  insert into questions (assessment_id, topic_id, difficulty, prompt, order_index)
  values (v_assessment_id, v_topic_algebra, 'intermediate', 'Factorise: x² + 5x + 6', 4)
  returning id into v_q_id;
  insert into question_options (question_id, label, is_correct, order_index) values
    (v_q_id, '(x + 2)(x + 3)', true, 1),
    (v_q_id, '(x + 1)(x + 6)', false, 2),
    (v_q_id, '(x + 5)(x + 1)', false, 3),
    (v_q_id, '(x - 2)(x - 3)', false, 4);

  -- Q5: Functions
  insert into questions (assessment_id, topic_id, difficulty, prompt, order_index)
  values (v_assessment_id, v_topic_functions, 'intermediate', 'If f(x) = 2x + 1, what is f(4)?', 5)
  returning id into v_q_id;
  insert into question_options (question_id, label, is_correct, order_index) values
    (v_q_id, '7', false, 1),
    (v_q_id, '8', false, 2),
    (v_q_id, '9', true, 3),
    (v_q_id, '10', false, 4);

  -- Q6: Coordinate geometry
  insert into questions (assessment_id, topic_id, difficulty, prompt, order_index)
  values (v_assessment_id, v_topic_coord, 'advanced', 'What is the gradient of the line joining (1, 2) and (3, 8)?', 6)
  returning id into v_q_id;
  insert into question_options (question_id, label, is_correct, order_index) values
    (v_q_id, '2', false, 1),
    (v_q_id, '3', true, 2),
    (v_q_id, '4', false, 3),
    (v_q_id, '6', false, 4);

end $$;
