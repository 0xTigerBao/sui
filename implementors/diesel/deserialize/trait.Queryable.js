(function() {var implementors = {
"sui_indexer":[["impl&lt;__DB: Backend, __ST0, __ST1, __ST2, __ST3, __ST4, __ST5&gt; Queryable&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(__ST0, __ST1, __ST2, __ST3, __ST4, __ST5)</a>, __DB&gt; for <a class=\"struct\" href=\"sui_indexer/models/move_events/struct.MoveEvent.html\" title=\"struct sui_indexer::models::move_events::MoveEvent\">MoveEvent</a><span class=\"where fmt-newline\">where\n    (<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>, <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>, <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://docs.rs/chrono/latest/chrono/naive/datetime/struct.NaiveDateTime.html\" title=\"struct chrono::naive::datetime::NaiveDateTime\">NaiveDateTime</a>&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>): FromStaticSqlRow&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(__ST0, __ST1, __ST2, __ST3, __ST4, __ST5)</a>, __DB&gt;,</span>"],["impl&lt;__DB: Backend, __ST0&gt; Queryable&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(__ST0,)</a>, __DB&gt; for <a class=\"struct\" href=\"sui_indexer/models/object_logs/struct.ObjectLog.html\" title=\"struct sui_indexer::models::object_logs::ObjectLog\">ObjectLog</a><span class=\"where fmt-newline\">where\n    (<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>,): FromStaticSqlRow&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(__ST0,)</a>, __DB&gt;,</span>"],["impl&lt;__DB: Backend, __ST0, __ST1, __ST2, __ST3&gt; Queryable&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(__ST0, __ST1, __ST2, __ST3)</a>, __DB&gt; for <a class=\"struct\" href=\"sui_indexer/models/addresses/struct.Addresses.html\" title=\"struct sui_indexer::models::addresses::Addresses\">Addresses</a><span class=\"where fmt-newline\">where\n    (<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://docs.rs/chrono/latest/chrono/naive/datetime/struct.NaiveDateTime.html\" title=\"struct chrono::naive::datetime::NaiveDateTime\">NaiveDateTime</a>&gt;): FromStaticSqlRow&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(__ST0, __ST1, __ST2, __ST3)</a>, __DB&gt;,</span>"],["impl&lt;__DB: Backend, __ST0, __ST1, __ST2&gt; Queryable&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(__ST0, __ST1, __ST2)</a>, __DB&gt; for <a class=\"struct\" href=\"sui_indexer/models/object_event_logs/struct.ObjectEventLog.html\" title=\"struct sui_indexer::models::object_event_logs::ObjectEventLog\">ObjectEventLog</a><span class=\"where fmt-newline\">where\n    (<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>, <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;, <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>&gt;): FromStaticSqlRow&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(__ST0, __ST1, __ST2)</a>, __DB&gt;,</span>"],["impl&lt;__DB: Backend, __ST0, __ST1, __ST2, __ST3, __ST4, __ST5&gt; Queryable&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(__ST0, __ST1, __ST2, __ST3, __ST4, __ST5)</a>, __DB&gt; for <a class=\"struct\" href=\"sui_indexer/models/object_events/struct.ObjectEvent.html\" title=\"struct sui_indexer::models::object_events::ObjectEvent\">ObjectEvent</a><span class=\"where fmt-newline\">where\n    (<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>, <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>, <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://docs.rs/chrono/latest/chrono/naive/datetime/struct.NaiveDateTime.html\" title=\"struct chrono::naive::datetime::NaiveDateTime\">NaiveDateTime</a>&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>): FromStaticSqlRow&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(__ST0, __ST1, __ST2, __ST3, __ST4, __ST5)</a>, __DB&gt;,</span>"],["impl&lt;__DB: Backend, __ST0, __ST1, __ST2, __ST3, __ST4, __ST5, __ST6&gt; Queryable&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(__ST0, __ST1, __ST2, __ST3, __ST4, __ST5, __ST6)</a>, __DB&gt; for <a class=\"struct\" href=\"sui_indexer/models/events/struct.Event.html\" title=\"struct sui_indexer::models::events::Event\">Event</a><span class=\"where fmt-newline\">where\n    (<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>, <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://docs.rs/chrono/latest/chrono/naive/datetime/struct.NaiveDateTime.html\" title=\"struct chrono::naive::datetime::NaiveDateTime\">NaiveDateTime</a>&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;): FromStaticSqlRow&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(__ST0, __ST1, __ST2, __ST3, __ST4, __ST5, __ST6)</a>, __DB&gt;,</span>"],["impl&lt;__DB: Backend, __ST0, __ST1&gt; Queryable&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(__ST0, __ST1)</a>, __DB&gt; for <a class=\"struct\" href=\"sui_indexer/models/transaction_logs/struct.TransactionLog.html\" title=\"struct sui_indexer::models::transaction_logs::TransactionLog\">TransactionLog</a><span class=\"where fmt-newline\">where\n    (<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>, <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;): FromStaticSqlRow&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(__ST0, __ST1)</a>, __DB&gt;,</span>"],["impl&lt;__DB: Backend, __ST0&gt; Queryable&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(__ST0,)</a>, __DB&gt; for <a class=\"struct\" href=\"sui_indexer/models/checkpoint_logs/struct.CheckpointLog.html\" title=\"struct sui_indexer::models::checkpoint_logs::CheckpointLog\">CheckpointLog</a><span class=\"where fmt-newline\">where\n    (<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>,): FromStaticSqlRow&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(__ST0,)</a>, __DB&gt;,</span>"],["impl&lt;__DB: Backend, __ST0, __ST1, __ST2&gt; Queryable&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(__ST0, __ST1, __ST2)</a>, __DB&gt; for <a class=\"struct\" href=\"sui_indexer/models/publish_event_logs/struct.PublishEventLog.html\" title=\"struct sui_indexer::models::publish_event_logs::PublishEventLog\">PublishEventLog</a><span class=\"where fmt-newline\">where\n    (<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>, <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;, <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>&gt;): FromStaticSqlRow&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(__ST0, __ST1, __ST2)</a>, __DB&gt;,</span>"],["impl&lt;__DB: Backend, __ST0&gt; Queryable&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(__ST0,)</a>, __DB&gt; for <a class=\"struct\" href=\"sui_indexer/models/package_logs/struct.PackageLog.html\" title=\"struct sui_indexer::models::package_logs::PackageLog\">PackageLog</a><span class=\"where fmt-newline\">where\n    (<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>,): FromStaticSqlRow&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(__ST0,)</a>, __DB&gt;,</span>"],["impl&lt;__DB: Backend, __ST0&gt; Queryable&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(__ST0,)</a>, __DB&gt; for <a class=\"struct\" href=\"sui_indexer/models/address_logs/struct.AddressLog.html\" title=\"struct sui_indexer::models::address_logs::AddressLog\">AddressLog</a><span class=\"where fmt-newline\">where\n    (<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>,): FromStaticSqlRow&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(__ST0,)</a>, __DB&gt;,</span>"],["impl&lt;__DB: Backend, __ST0, __ST1, __ST2, __ST3&gt; Queryable&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(__ST0, __ST1, __ST2, __ST3)</a>, __DB&gt; for <a class=\"struct\" href=\"sui_indexer/models/error_logs/struct.ErrorLog.html\" title=\"struct sui_indexer::models::error_logs::ErrorLog\">ErrorLog</a><span class=\"where fmt-newline\">where\n    (<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"struct\" href=\"https://docs.rs/chrono/latest/chrono/naive/datetime/struct.NaiveDateTime.html\" title=\"struct chrono::naive::datetime::NaiveDateTime\">NaiveDateTime</a>): FromStaticSqlRow&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(__ST0, __ST1, __ST2, __ST3)</a>, __DB&gt;,</span>"],["impl&lt;__DB: Backend, __ST0, __ST1, __ST2, __ST3, __ST4, __ST5, __ST6, __ST7, __ST8, __ST9, __ST10, __ST11, __ST12, __ST13, __ST14, __ST15, __ST16, __ST17, __ST18, __ST19&gt; Queryable&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(__ST0, __ST1, __ST2, __ST3, __ST4, __ST5, __ST6, __ST7, __ST8, __ST9, __ST10, __ST11, __ST12, __ST13, __ST14, __ST15, __ST16, __ST17, __ST18, __ST19)</a>, __DB&gt; for <a class=\"struct\" href=\"sui_indexer/models/transactions/struct.Transaction.html\" title=\"struct sui_indexer::models::transactions::Transaction\">Transaction</a><span class=\"where fmt-newline\">where\n    (<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://docs.rs/chrono/latest/chrono/naive/datetime/struct.NaiveDateTime.html\" title=\"struct chrono::naive::datetime::NaiveDateTime\">NaiveDateTime</a>&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>): FromStaticSqlRow&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(__ST0, __ST1, __ST2, __ST3, __ST4, __ST5, __ST6, __ST7, __ST8, __ST9, __ST10, __ST11, __ST12, __ST13, __ST14, __ST15, __ST16, __ST17, __ST18, __ST19)</a>, __DB&gt;,</span>"],["impl&lt;__DB: Backend, __ST0, __ST1, __ST2, __ST3, __ST4, __ST5, __ST6, __ST7, __ST8, __ST9, __ST10, __ST11, __ST12, __ST13, __ST14&gt; Queryable&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(__ST0, __ST1, __ST2, __ST3, __ST4, __ST5, __ST6, __ST7, __ST8, __ST9, __ST10, __ST11, __ST12, __ST13, __ST14)</a>, __DB&gt; for <a class=\"struct\" href=\"sui_indexer/models/checkpoints/struct.Checkpoint.html\" title=\"struct sui_indexer::models::checkpoints::Checkpoint\">Checkpoint</a><span class=\"where fmt-newline\">where\n    (<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>, <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;, <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>, <a class=\"struct\" href=\"https://docs.rs/chrono/latest/chrono/naive/datetime/struct.NaiveDateTime.html\" title=\"struct chrono::naive::datetime::NaiveDateTime\">NaiveDateTime</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f32.html\">f32</a>): FromStaticSqlRow&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(__ST0, __ST1, __ST2, __ST3, __ST4, __ST5, __ST6, __ST7, __ST8, __ST9, __ST10, __ST11, __ST12, __ST13, __ST14)</a>, __DB&gt;,</span>"],["impl&lt;__DB: Backend, __ST0, __ST1, __ST2, __ST3, __ST4, __ST5&gt; Queryable&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(__ST0, __ST1, __ST2, __ST3, __ST4, __ST5)</a>, __DB&gt; for <a class=\"struct\" href=\"sui_indexer/models/publish_events/struct.PublishEvent.html\" title=\"struct sui_indexer::models::publish_events::PublishEvent\">PublishEvent</a><span class=\"where fmt-newline\">where\n    (<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>, <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>, <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://docs.rs/chrono/latest/chrono/naive/datetime/struct.NaiveDateTime.html\" title=\"struct chrono::naive::datetime::NaiveDateTime\">NaiveDateTime</a>&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>): FromStaticSqlRow&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(__ST0, __ST1, __ST2, __ST3, __ST4, __ST5)</a>, __DB&gt;,</span>"],["impl&lt;__DB: Backend, __ST0, __ST1, __ST2, __ST3, __ST4, __ST5, __ST6, __ST7, __ST8, __ST9&gt; Queryable&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(__ST0, __ST1, __ST2, __ST3, __ST4, __ST5, __ST6, __ST7, __ST8, __ST9)</a>, __DB&gt; for <a class=\"struct\" href=\"sui_indexer/models/objects/struct.Object.html\" title=\"struct sui_indexer::models::objects::Object\">Object</a><span class=\"where fmt-newline\">where\n    (<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;, <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>): FromStaticSqlRow&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(__ST0, __ST1, __ST2, __ST3, __ST4, __ST5, __ST6, __ST7, __ST8, __ST9)</a>, __DB&gt;,</span>"],["impl&lt;__DB: Backend, __ST0, __ST1, __ST2&gt; Queryable&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(__ST0, __ST1, __ST2)</a>, __DB&gt; for <a class=\"struct\" href=\"sui_indexer/models/move_event_logs/struct.MoveEventLog.html\" title=\"struct sui_indexer::models::move_event_logs::MoveEventLog\">MoveEventLog</a><span class=\"where fmt-newline\">where\n    (<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>, <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;, <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>&gt;): FromStaticSqlRow&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(__ST0, __ST1, __ST2)</a>, __DB&gt;,</span>"],["impl&lt;__DB: Backend, __ST0, __ST1, __ST2, __ST3, __ST4&gt; Queryable&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(__ST0, __ST1, __ST2, __ST3, __ST4)</a>, __DB&gt; for <a class=\"struct\" href=\"sui_indexer/models/packages/struct.Package.html\" title=\"struct sui_indexer::models::packages::Package\">Package</a><span class=\"where fmt-newline\">where\n    (<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>): FromStaticSqlRow&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(__ST0, __ST1, __ST2, __ST3, __ST4)</a>, __DB&gt;,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()