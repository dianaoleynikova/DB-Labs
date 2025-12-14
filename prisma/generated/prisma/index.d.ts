
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model author
 * 
 */
export type author = $Result.DefaultSelection<Prisma.$authorPayload>
/**
 * Model book
 * 
 */
export type book = $Result.DefaultSelection<Prisma.$bookPayload>
/**
 * Model bookauthor
 * 
 */
export type bookauthor = $Result.DefaultSelection<Prisma.$bookauthorPayload>
/**
 * Model copy
 * 
 */
export type copy = $Result.DefaultSelection<Prisma.$copyPayload>
/**
 * Model fine
 * 
 */
export type fine = $Result.DefaultSelection<Prisma.$finePayload>
/**
 * Model loan
 * 
 */
export type loan = $Result.DefaultSelection<Prisma.$loanPayload>
/**
 * Model member
 * 
 */
export type member = $Result.DefaultSelection<Prisma.$memberPayload>
/**
 * Model publisher
 * 
 */
export type publisher = $Result.DefaultSelection<Prisma.$publisherPayload>
/**
 * Model review
 * 
 */
export type review = $Result.DefaultSelection<Prisma.$reviewPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Authors
 * const authors = await prisma.author.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Authors
   * const authors = await prisma.author.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.author`: Exposes CRUD operations for the **author** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authors
    * const authors = await prisma.author.findMany()
    * ```
    */
  get author(): Prisma.authorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.book`: Exposes CRUD operations for the **book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.book.findMany()
    * ```
    */
  get book(): Prisma.bookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookauthor`: Exposes CRUD operations for the **bookauthor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookauthors
    * const bookauthors = await prisma.bookauthor.findMany()
    * ```
    */
  get bookauthor(): Prisma.bookauthorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.copy`: Exposes CRUD operations for the **copy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Copies
    * const copies = await prisma.copy.findMany()
    * ```
    */
  get copy(): Prisma.copyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fine`: Exposes CRUD operations for the **fine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fines
    * const fines = await prisma.fine.findMany()
    * ```
    */
  get fine(): Prisma.fineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.loan`: Exposes CRUD operations for the **loan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Loans
    * const loans = await prisma.loan.findMany()
    * ```
    */
  get loan(): Prisma.loanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.member`: Exposes CRUD operations for the **member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.member.findMany()
    * ```
    */
  get member(): Prisma.memberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.publisher`: Exposes CRUD operations for the **publisher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Publishers
    * const publishers = await prisma.publisher.findMany()
    * ```
    */
  get publisher(): Prisma.publisherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.reviewDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.1
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    author: 'author',
    book: 'book',
    bookauthor: 'bookauthor',
    copy: 'copy',
    fine: 'fine',
    loan: 'loan',
    member: 'member',
    publisher: 'publisher',
    review: 'review'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "author" | "book" | "bookauthor" | "copy" | "fine" | "loan" | "member" | "publisher" | "review"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      author: {
        payload: Prisma.$authorPayload<ExtArgs>
        fields: Prisma.authorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.authorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.authorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload>
          }
          findFirst: {
            args: Prisma.authorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.authorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload>
          }
          findMany: {
            args: Prisma.authorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload>[]
          }
          create: {
            args: Prisma.authorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload>
          }
          createMany: {
            args: Prisma.authorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.authorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload>[]
          }
          delete: {
            args: Prisma.authorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload>
          }
          update: {
            args: Prisma.authorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload>
          }
          deleteMany: {
            args: Prisma.authorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.authorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.authorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload>[]
          }
          upsert: {
            args: Prisma.authorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload>
          }
          aggregate: {
            args: Prisma.AuthorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthor>
          }
          groupBy: {
            args: Prisma.authorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthorGroupByOutputType>[]
          }
          count: {
            args: Prisma.authorCountArgs<ExtArgs>
            result: $Utils.Optional<AuthorCountAggregateOutputType> | number
          }
        }
      }
      book: {
        payload: Prisma.$bookPayload<ExtArgs>
        fields: Prisma.bookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>
          }
          findFirst: {
            args: Prisma.bookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>
          }
          findMany: {
            args: Prisma.bookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>[]
          }
          create: {
            args: Prisma.bookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>
          }
          createMany: {
            args: Prisma.bookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.bookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>[]
          }
          delete: {
            args: Prisma.bookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>
          }
          update: {
            args: Prisma.bookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>
          }
          deleteMany: {
            args: Prisma.bookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.bookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>[]
          }
          upsert: {
            args: Prisma.bookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>
          }
          aggregate: {
            args: Prisma.BookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook>
          }
          groupBy: {
            args: Prisma.bookGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookGroupByOutputType>[]
          }
          count: {
            args: Prisma.bookCountArgs<ExtArgs>
            result: $Utils.Optional<BookCountAggregateOutputType> | number
          }
        }
      }
      bookauthor: {
        payload: Prisma.$bookauthorPayload<ExtArgs>
        fields: Prisma.bookauthorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bookauthorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookauthorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bookauthorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookauthorPayload>
          }
          findFirst: {
            args: Prisma.bookauthorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookauthorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bookauthorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookauthorPayload>
          }
          findMany: {
            args: Prisma.bookauthorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookauthorPayload>[]
          }
          create: {
            args: Prisma.bookauthorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookauthorPayload>
          }
          createMany: {
            args: Prisma.bookauthorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.bookauthorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookauthorPayload>[]
          }
          delete: {
            args: Prisma.bookauthorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookauthorPayload>
          }
          update: {
            args: Prisma.bookauthorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookauthorPayload>
          }
          deleteMany: {
            args: Prisma.bookauthorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bookauthorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.bookauthorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookauthorPayload>[]
          }
          upsert: {
            args: Prisma.bookauthorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookauthorPayload>
          }
          aggregate: {
            args: Prisma.BookauthorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookauthor>
          }
          groupBy: {
            args: Prisma.bookauthorGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookauthorGroupByOutputType>[]
          }
          count: {
            args: Prisma.bookauthorCountArgs<ExtArgs>
            result: $Utils.Optional<BookauthorCountAggregateOutputType> | number
          }
        }
      }
      copy: {
        payload: Prisma.$copyPayload<ExtArgs>
        fields: Prisma.copyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.copyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$copyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.copyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$copyPayload>
          }
          findFirst: {
            args: Prisma.copyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$copyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.copyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$copyPayload>
          }
          findMany: {
            args: Prisma.copyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$copyPayload>[]
          }
          create: {
            args: Prisma.copyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$copyPayload>
          }
          createMany: {
            args: Prisma.copyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.copyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$copyPayload>[]
          }
          delete: {
            args: Prisma.copyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$copyPayload>
          }
          update: {
            args: Prisma.copyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$copyPayload>
          }
          deleteMany: {
            args: Prisma.copyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.copyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.copyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$copyPayload>[]
          }
          upsert: {
            args: Prisma.copyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$copyPayload>
          }
          aggregate: {
            args: Prisma.CopyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCopy>
          }
          groupBy: {
            args: Prisma.copyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CopyGroupByOutputType>[]
          }
          count: {
            args: Prisma.copyCountArgs<ExtArgs>
            result: $Utils.Optional<CopyCountAggregateOutputType> | number
          }
        }
      }
      fine: {
        payload: Prisma.$finePayload<ExtArgs>
        fields: Prisma.fineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.fineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$finePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.fineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$finePayload>
          }
          findFirst: {
            args: Prisma.fineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$finePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.fineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$finePayload>
          }
          findMany: {
            args: Prisma.fineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$finePayload>[]
          }
          create: {
            args: Prisma.fineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$finePayload>
          }
          createMany: {
            args: Prisma.fineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.fineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$finePayload>[]
          }
          delete: {
            args: Prisma.fineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$finePayload>
          }
          update: {
            args: Prisma.fineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$finePayload>
          }
          deleteMany: {
            args: Prisma.fineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.fineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.fineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$finePayload>[]
          }
          upsert: {
            args: Prisma.fineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$finePayload>
          }
          aggregate: {
            args: Prisma.FineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFine>
          }
          groupBy: {
            args: Prisma.fineGroupByArgs<ExtArgs>
            result: $Utils.Optional<FineGroupByOutputType>[]
          }
          count: {
            args: Prisma.fineCountArgs<ExtArgs>
            result: $Utils.Optional<FineCountAggregateOutputType> | number
          }
        }
      }
      loan: {
        payload: Prisma.$loanPayload<ExtArgs>
        fields: Prisma.loanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.loanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.loanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loanPayload>
          }
          findFirst: {
            args: Prisma.loanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.loanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loanPayload>
          }
          findMany: {
            args: Prisma.loanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loanPayload>[]
          }
          create: {
            args: Prisma.loanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loanPayload>
          }
          createMany: {
            args: Prisma.loanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.loanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loanPayload>[]
          }
          delete: {
            args: Prisma.loanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loanPayload>
          }
          update: {
            args: Prisma.loanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loanPayload>
          }
          deleteMany: {
            args: Prisma.loanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.loanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.loanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loanPayload>[]
          }
          upsert: {
            args: Prisma.loanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loanPayload>
          }
          aggregate: {
            args: Prisma.LoanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoan>
          }
          groupBy: {
            args: Prisma.loanGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoanGroupByOutputType>[]
          }
          count: {
            args: Prisma.loanCountArgs<ExtArgs>
            result: $Utils.Optional<LoanCountAggregateOutputType> | number
          }
        }
      }
      member: {
        payload: Prisma.$memberPayload<ExtArgs>
        fields: Prisma.memberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.memberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.memberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          findFirst: {
            args: Prisma.memberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.memberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          findMany: {
            args: Prisma.memberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>[]
          }
          create: {
            args: Prisma.memberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          createMany: {
            args: Prisma.memberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.memberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>[]
          }
          delete: {
            args: Prisma.memberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          update: {
            args: Prisma.memberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          deleteMany: {
            args: Prisma.memberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.memberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.memberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>[]
          }
          upsert: {
            args: Prisma.memberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          aggregate: {
            args: Prisma.MemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMember>
          }
          groupBy: {
            args: Prisma.memberGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.memberCountArgs<ExtArgs>
            result: $Utils.Optional<MemberCountAggregateOutputType> | number
          }
        }
      }
      publisher: {
        payload: Prisma.$publisherPayload<ExtArgs>
        fields: Prisma.publisherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.publisherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publisherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.publisherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publisherPayload>
          }
          findFirst: {
            args: Prisma.publisherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publisherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.publisherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publisherPayload>
          }
          findMany: {
            args: Prisma.publisherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publisherPayload>[]
          }
          create: {
            args: Prisma.publisherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publisherPayload>
          }
          createMany: {
            args: Prisma.publisherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.publisherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publisherPayload>[]
          }
          delete: {
            args: Prisma.publisherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publisherPayload>
          }
          update: {
            args: Prisma.publisherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publisherPayload>
          }
          deleteMany: {
            args: Prisma.publisherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.publisherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.publisherUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publisherPayload>[]
          }
          upsert: {
            args: Prisma.publisherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publisherPayload>
          }
          aggregate: {
            args: Prisma.PublisherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublisher>
          }
          groupBy: {
            args: Prisma.publisherGroupByArgs<ExtArgs>
            result: $Utils.Optional<PublisherGroupByOutputType>[]
          }
          count: {
            args: Prisma.publisherCountArgs<ExtArgs>
            result: $Utils.Optional<PublisherCountAggregateOutputType> | number
          }
        }
      }
      review: {
        payload: Prisma.$reviewPayload<ExtArgs>
        fields: Prisma.reviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          findFirst: {
            args: Prisma.reviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          findMany: {
            args: Prisma.reviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>[]
          }
          create: {
            args: Prisma.reviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          createMany: {
            args: Prisma.reviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.reviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>[]
          }
          delete: {
            args: Prisma.reviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          update: {
            args: Prisma.reviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          deleteMany: {
            args: Prisma.reviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.reviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>[]
          }
          upsert: {
            args: Prisma.reviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.reviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.reviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    author?: authorOmit
    book?: bookOmit
    bookauthor?: bookauthorOmit
    copy?: copyOmit
    fine?: fineOmit
    loan?: loanOmit
    member?: memberOmit
    publisher?: publisherOmit
    review?: reviewOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AuthorCountOutputType
   */

  export type AuthorCountOutputType = {
    bookauthor: number
  }

  export type AuthorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookauthor?: boolean | AuthorCountOutputTypeCountBookauthorArgs
  }

  // Custom InputTypes
  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorCountOutputType
     */
    select?: AuthorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeCountBookauthorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookauthorWhereInput
  }


  /**
   * Count Type BookCountOutputType
   */

  export type BookCountOutputType = {
    bookauthor: number
    copy: number
    review: number
  }

  export type BookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookauthor?: boolean | BookCountOutputTypeCountBookauthorArgs
    copy?: boolean | BookCountOutputTypeCountCopyArgs
    review?: boolean | BookCountOutputTypeCountReviewArgs
  }

  // Custom InputTypes
  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCountOutputType
     */
    select?: BookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountBookauthorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookauthorWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountCopyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: copyWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
  }


  /**
   * Count Type CopyCountOutputType
   */

  export type CopyCountOutputType = {
    loan: number
  }

  export type CopyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loan?: boolean | CopyCountOutputTypeCountLoanArgs
  }

  // Custom InputTypes
  /**
   * CopyCountOutputType without action
   */
  export type CopyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CopyCountOutputType
     */
    select?: CopyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CopyCountOutputType without action
   */
  export type CopyCountOutputTypeCountLoanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: loanWhereInput
  }


  /**
   * Count Type LoanCountOutputType
   */

  export type LoanCountOutputType = {
    fine: number
  }

  export type LoanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fine?: boolean | LoanCountOutputTypeCountFineArgs
  }

  // Custom InputTypes
  /**
   * LoanCountOutputType without action
   */
  export type LoanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanCountOutputType
     */
    select?: LoanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LoanCountOutputType without action
   */
  export type LoanCountOutputTypeCountFineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fineWhereInput
  }


  /**
   * Count Type MemberCountOutputType
   */

  export type MemberCountOutputType = {
    loan: number
  }

  export type MemberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loan?: boolean | MemberCountOutputTypeCountLoanArgs
  }

  // Custom InputTypes
  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberCountOutputType
     */
    select?: MemberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountLoanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: loanWhereInput
  }


  /**
   * Count Type PublisherCountOutputType
   */

  export type PublisherCountOutputType = {
    book: number
  }

  export type PublisherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | PublisherCountOutputTypeCountBookArgs
  }

  // Custom InputTypes
  /**
   * PublisherCountOutputType without action
   */
  export type PublisherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublisherCountOutputType
     */
    select?: PublisherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PublisherCountOutputType without action
   */
  export type PublisherCountOutputTypeCountBookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookWhereInput
  }


  /**
   * Models
   */

  /**
   * Model author
   */

  export type AggregateAuthor = {
    _count: AuthorCountAggregateOutputType | null
    _avg: AuthorAvgAggregateOutputType | null
    _sum: AuthorSumAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  export type AuthorAvgAggregateOutputType = {
    author_id: number | null
  }

  export type AuthorSumAggregateOutputType = {
    author_id: number | null
  }

  export type AuthorMinAggregateOutputType = {
    author_id: number | null
    full_name: string | null
    birth_date: Date | null
  }

  export type AuthorMaxAggregateOutputType = {
    author_id: number | null
    full_name: string | null
    birth_date: Date | null
  }

  export type AuthorCountAggregateOutputType = {
    author_id: number
    full_name: number
    birth_date: number
    _all: number
  }


  export type AuthorAvgAggregateInputType = {
    author_id?: true
  }

  export type AuthorSumAggregateInputType = {
    author_id?: true
  }

  export type AuthorMinAggregateInputType = {
    author_id?: true
    full_name?: true
    birth_date?: true
  }

  export type AuthorMaxAggregateInputType = {
    author_id?: true
    full_name?: true
    birth_date?: true
  }

  export type AuthorCountAggregateInputType = {
    author_id?: true
    full_name?: true
    birth_date?: true
    _all?: true
  }

  export type AuthorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which author to aggregate.
     */
    where?: authorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authors to fetch.
     */
    orderBy?: authorOrderByWithRelationInput | authorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: authorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned authors
    **/
    _count?: true | AuthorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorMaxAggregateInputType
  }

  export type GetAuthorAggregateType<T extends AuthorAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthor[P]>
      : GetScalarType<T[P], AggregateAuthor[P]>
  }




  export type authorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: authorWhereInput
    orderBy?: authorOrderByWithAggregationInput | authorOrderByWithAggregationInput[]
    by: AuthorScalarFieldEnum[] | AuthorScalarFieldEnum
    having?: authorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorCountAggregateInputType | true
    _avg?: AuthorAvgAggregateInputType
    _sum?: AuthorSumAggregateInputType
    _min?: AuthorMinAggregateInputType
    _max?: AuthorMaxAggregateInputType
  }

  export type AuthorGroupByOutputType = {
    author_id: number
    full_name: string
    birth_date: Date | null
    _count: AuthorCountAggregateOutputType | null
    _avg: AuthorAvgAggregateOutputType | null
    _sum: AuthorSumAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  type GetAuthorGroupByPayload<T extends authorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorGroupByOutputType[P]>
        }
      >
    >


  export type authorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    author_id?: boolean
    full_name?: boolean
    birth_date?: boolean
    bookauthor?: boolean | author$bookauthorArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["author"]>

  export type authorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    author_id?: boolean
    full_name?: boolean
    birth_date?: boolean
  }, ExtArgs["result"]["author"]>

  export type authorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    author_id?: boolean
    full_name?: boolean
    birth_date?: boolean
  }, ExtArgs["result"]["author"]>

  export type authorSelectScalar = {
    author_id?: boolean
    full_name?: boolean
    birth_date?: boolean
  }

  export type authorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"author_id" | "full_name" | "birth_date", ExtArgs["result"]["author"]>
  export type authorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookauthor?: boolean | author$bookauthorArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type authorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type authorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $authorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "author"
    objects: {
      bookauthor: Prisma.$bookauthorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      author_id: number
      full_name: string
      birth_date: Date | null
    }, ExtArgs["result"]["author"]>
    composites: {}
  }

  type authorGetPayload<S extends boolean | null | undefined | authorDefaultArgs> = $Result.GetResult<Prisma.$authorPayload, S>

  type authorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<authorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthorCountAggregateInputType | true
    }

  export interface authorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['author'], meta: { name: 'author' } }
    /**
     * Find zero or one Author that matches the filter.
     * @param {authorFindUniqueArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends authorFindUniqueArgs>(args: SelectSubset<T, authorFindUniqueArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Author that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {authorFindUniqueOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends authorFindUniqueOrThrowArgs>(args: SelectSubset<T, authorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Author that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorFindFirstArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends authorFindFirstArgs>(args?: SelectSubset<T, authorFindFirstArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Author that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorFindFirstOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends authorFindFirstOrThrowArgs>(args?: SelectSubset<T, authorFindFirstOrThrowArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authors
     * const authors = await prisma.author.findMany()
     * 
     * // Get first 10 Authors
     * const authors = await prisma.author.findMany({ take: 10 })
     * 
     * // Only select the `author_id`
     * const authorWithAuthor_idOnly = await prisma.author.findMany({ select: { author_id: true } })
     * 
     */
    findMany<T extends authorFindManyArgs>(args?: SelectSubset<T, authorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Author.
     * @param {authorCreateArgs} args - Arguments to create a Author.
     * @example
     * // Create one Author
     * const Author = await prisma.author.create({
     *   data: {
     *     // ... data to create a Author
     *   }
     * })
     * 
     */
    create<T extends authorCreateArgs>(args: SelectSubset<T, authorCreateArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Authors.
     * @param {authorCreateManyArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends authorCreateManyArgs>(args?: SelectSubset<T, authorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Authors and returns the data saved in the database.
     * @param {authorCreateManyAndReturnArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Authors and only return the `author_id`
     * const authorWithAuthor_idOnly = await prisma.author.createManyAndReturn({
     *   select: { author_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends authorCreateManyAndReturnArgs>(args?: SelectSubset<T, authorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Author.
     * @param {authorDeleteArgs} args - Arguments to delete one Author.
     * @example
     * // Delete one Author
     * const Author = await prisma.author.delete({
     *   where: {
     *     // ... filter to delete one Author
     *   }
     * })
     * 
     */
    delete<T extends authorDeleteArgs>(args: SelectSubset<T, authorDeleteArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Author.
     * @param {authorUpdateArgs} args - Arguments to update one Author.
     * @example
     * // Update one Author
     * const author = await prisma.author.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends authorUpdateArgs>(args: SelectSubset<T, authorUpdateArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Authors.
     * @param {authorDeleteManyArgs} args - Arguments to filter Authors to delete.
     * @example
     * // Delete a few Authors
     * const { count } = await prisma.author.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends authorDeleteManyArgs>(args?: SelectSubset<T, authorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends authorUpdateManyArgs>(args: SelectSubset<T, authorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors and returns the data updated in the database.
     * @param {authorUpdateManyAndReturnArgs} args - Arguments to update many Authors.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Authors and only return the `author_id`
     * const authorWithAuthor_idOnly = await prisma.author.updateManyAndReturn({
     *   select: { author_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends authorUpdateManyAndReturnArgs>(args: SelectSubset<T, authorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Author.
     * @param {authorUpsertArgs} args - Arguments to update or create a Author.
     * @example
     * // Update or create a Author
     * const author = await prisma.author.upsert({
     *   create: {
     *     // ... data to create a Author
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Author we want to update
     *   }
     * })
     */
    upsert<T extends authorUpsertArgs>(args: SelectSubset<T, authorUpsertArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorCountArgs} args - Arguments to filter Authors to count.
     * @example
     * // Count the number of Authors
     * const count = await prisma.author.count({
     *   where: {
     *     // ... the filter for the Authors we want to count
     *   }
     * })
    **/
    count<T extends authorCountArgs>(
      args?: Subset<T, authorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthorAggregateArgs>(args: Subset<T, AuthorAggregateArgs>): Prisma.PrismaPromise<GetAuthorAggregateType<T>>

    /**
     * Group by Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends authorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: authorGroupByArgs['orderBy'] }
        : { orderBy?: authorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, authorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the author model
   */
  readonly fields: authorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for author.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__authorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookauthor<T extends author$bookauthorArgs<ExtArgs> = {}>(args?: Subset<T, author$bookauthorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookauthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the author model
   */
  interface authorFieldRefs {
    readonly author_id: FieldRef<"author", 'Int'>
    readonly full_name: FieldRef<"author", 'String'>
    readonly birth_date: FieldRef<"author", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * author findUnique
   */
  export type authorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * Filter, which author to fetch.
     */
    where: authorWhereUniqueInput
  }

  /**
   * author findUniqueOrThrow
   */
  export type authorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * Filter, which author to fetch.
     */
    where: authorWhereUniqueInput
  }

  /**
   * author findFirst
   */
  export type authorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * Filter, which author to fetch.
     */
    where?: authorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authors to fetch.
     */
    orderBy?: authorOrderByWithRelationInput | authorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authors.
     */
    cursor?: authorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * author findFirstOrThrow
   */
  export type authorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * Filter, which author to fetch.
     */
    where?: authorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authors to fetch.
     */
    orderBy?: authorOrderByWithRelationInput | authorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authors.
     */
    cursor?: authorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * author findMany
   */
  export type authorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * Filter, which authors to fetch.
     */
    where?: authorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authors to fetch.
     */
    orderBy?: authorOrderByWithRelationInput | authorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing authors.
     */
    cursor?: authorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authors.
     */
    skip?: number
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * author create
   */
  export type authorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * The data needed to create a author.
     */
    data: XOR<authorCreateInput, authorUncheckedCreateInput>
  }

  /**
   * author createMany
   */
  export type authorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many authors.
     */
    data: authorCreateManyInput | authorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * author createManyAndReturn
   */
  export type authorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * The data used to create many authors.
     */
    data: authorCreateManyInput | authorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * author update
   */
  export type authorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * The data needed to update a author.
     */
    data: XOR<authorUpdateInput, authorUncheckedUpdateInput>
    /**
     * Choose, which author to update.
     */
    where: authorWhereUniqueInput
  }

  /**
   * author updateMany
   */
  export type authorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update authors.
     */
    data: XOR<authorUpdateManyMutationInput, authorUncheckedUpdateManyInput>
    /**
     * Filter which authors to update
     */
    where?: authorWhereInput
    /**
     * Limit how many authors to update.
     */
    limit?: number
  }

  /**
   * author updateManyAndReturn
   */
  export type authorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * The data used to update authors.
     */
    data: XOR<authorUpdateManyMutationInput, authorUncheckedUpdateManyInput>
    /**
     * Filter which authors to update
     */
    where?: authorWhereInput
    /**
     * Limit how many authors to update.
     */
    limit?: number
  }

  /**
   * author upsert
   */
  export type authorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * The filter to search for the author to update in case it exists.
     */
    where: authorWhereUniqueInput
    /**
     * In case the author found by the `where` argument doesn't exist, create a new author with this data.
     */
    create: XOR<authorCreateInput, authorUncheckedCreateInput>
    /**
     * In case the author was found with the provided `where` argument, update it with this data.
     */
    update: XOR<authorUpdateInput, authorUncheckedUpdateInput>
  }

  /**
   * author delete
   */
  export type authorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * Filter which author to delete.
     */
    where: authorWhereUniqueInput
  }

  /**
   * author deleteMany
   */
  export type authorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which authors to delete
     */
    where?: authorWhereInput
    /**
     * Limit how many authors to delete.
     */
    limit?: number
  }

  /**
   * author.bookauthor
   */
  export type author$bookauthorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookauthor
     */
    select?: bookauthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookauthor
     */
    omit?: bookauthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookauthorInclude<ExtArgs> | null
    where?: bookauthorWhereInput
    orderBy?: bookauthorOrderByWithRelationInput | bookauthorOrderByWithRelationInput[]
    cursor?: bookauthorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookauthorScalarFieldEnum | BookauthorScalarFieldEnum[]
  }

  /**
   * author without action
   */
  export type authorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
  }


  /**
   * Model book
   */

  export type AggregateBook = {
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  export type BookAvgAggregateOutputType = {
    book_id: number | null
    year_published: number | null
    publisher_id: number | null
  }

  export type BookSumAggregateOutputType = {
    book_id: number | null
    year_published: number | null
    publisher_id: number | null
  }

  export type BookMinAggregateOutputType = {
    book_id: number | null
    isbn: string | null
    title: string | null
    year_published: number | null
    genre: string | null
    publisher_id: number | null
  }

  export type BookMaxAggregateOutputType = {
    book_id: number | null
    isbn: string | null
    title: string | null
    year_published: number | null
    genre: string | null
    publisher_id: number | null
  }

  export type BookCountAggregateOutputType = {
    book_id: number
    isbn: number
    title: number
    year_published: number
    genre: number
    publisher_id: number
    _all: number
  }


  export type BookAvgAggregateInputType = {
    book_id?: true
    year_published?: true
    publisher_id?: true
  }

  export type BookSumAggregateInputType = {
    book_id?: true
    year_published?: true
    publisher_id?: true
  }

  export type BookMinAggregateInputType = {
    book_id?: true
    isbn?: true
    title?: true
    year_published?: true
    genre?: true
    publisher_id?: true
  }

  export type BookMaxAggregateInputType = {
    book_id?: true
    isbn?: true
    title?: true
    year_published?: true
    genre?: true
    publisher_id?: true
  }

  export type BookCountAggregateInputType = {
    book_id?: true
    isbn?: true
    title?: true
    year_published?: true
    genre?: true
    publisher_id?: true
    _all?: true
  }

  export type BookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which book to aggregate.
     */
    where?: bookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: bookOrderByWithRelationInput | bookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned books
    **/
    _count?: true | BookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookMaxAggregateInputType
  }

  export type GetBookAggregateType<T extends BookAggregateArgs> = {
        [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook[P]>
      : GetScalarType<T[P], AggregateBook[P]>
  }




  export type bookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookWhereInput
    orderBy?: bookOrderByWithAggregationInput | bookOrderByWithAggregationInput[]
    by: BookScalarFieldEnum[] | BookScalarFieldEnum
    having?: bookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookCountAggregateInputType | true
    _avg?: BookAvgAggregateInputType
    _sum?: BookSumAggregateInputType
    _min?: BookMinAggregateInputType
    _max?: BookMaxAggregateInputType
  }

  export type BookGroupByOutputType = {
    book_id: number
    isbn: string
    title: string
    year_published: number | null
    genre: string | null
    publisher_id: number | null
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  type GetBookGroupByPayload<T extends bookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGroupByOutputType[P]>
            : GetScalarType<T[P], BookGroupByOutputType[P]>
        }
      >
    >


  export type bookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    book_id?: boolean
    isbn?: boolean
    title?: boolean
    year_published?: boolean
    genre?: boolean
    publisher_id?: boolean
    publisher?: boolean | book$publisherArgs<ExtArgs>
    bookauthor?: boolean | book$bookauthorArgs<ExtArgs>
    copy?: boolean | book$copyArgs<ExtArgs>
    review?: boolean | book$reviewArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type bookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    book_id?: boolean
    isbn?: boolean
    title?: boolean
    year_published?: boolean
    genre?: boolean
    publisher_id?: boolean
    publisher?: boolean | book$publisherArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type bookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    book_id?: boolean
    isbn?: boolean
    title?: boolean
    year_published?: boolean
    genre?: boolean
    publisher_id?: boolean
    publisher?: boolean | book$publisherArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type bookSelectScalar = {
    book_id?: boolean
    isbn?: boolean
    title?: boolean
    year_published?: boolean
    genre?: boolean
    publisher_id?: boolean
  }

  export type bookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"book_id" | "isbn" | "title" | "year_published" | "genre" | "publisher_id", ExtArgs["result"]["book"]>
  export type bookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publisher?: boolean | book$publisherArgs<ExtArgs>
    bookauthor?: boolean | book$bookauthorArgs<ExtArgs>
    copy?: boolean | book$copyArgs<ExtArgs>
    review?: boolean | book$reviewArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type bookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publisher?: boolean | book$publisherArgs<ExtArgs>
  }
  export type bookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publisher?: boolean | book$publisherArgs<ExtArgs>
  }

  export type $bookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "book"
    objects: {
      publisher: Prisma.$publisherPayload<ExtArgs> | null
      bookauthor: Prisma.$bookauthorPayload<ExtArgs>[]
      copy: Prisma.$copyPayload<ExtArgs>[]
      review: Prisma.$reviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      book_id: number
      isbn: string
      title: string
      year_published: number | null
      genre: string | null
      publisher_id: number | null
    }, ExtArgs["result"]["book"]>
    composites: {}
  }

  type bookGetPayload<S extends boolean | null | undefined | bookDefaultArgs> = $Result.GetResult<Prisma.$bookPayload, S>

  type bookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookCountAggregateInputType | true
    }

  export interface bookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['book'], meta: { name: 'book' } }
    /**
     * Find zero or one Book that matches the filter.
     * @param {bookFindUniqueArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bookFindUniqueArgs>(args: SelectSubset<T, bookFindUniqueArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Book that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bookFindUniqueOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bookFindUniqueOrThrowArgs>(args: SelectSubset<T, bookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookFindFirstArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bookFindFirstArgs>(args?: SelectSubset<T, bookFindFirstArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookFindFirstOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bookFindFirstOrThrowArgs>(args?: SelectSubset<T, bookFindFirstOrThrowArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.book.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.book.findMany({ take: 10 })
     * 
     * // Only select the `book_id`
     * const bookWithBook_idOnly = await prisma.book.findMany({ select: { book_id: true } })
     * 
     */
    findMany<T extends bookFindManyArgs>(args?: SelectSubset<T, bookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Book.
     * @param {bookCreateArgs} args - Arguments to create a Book.
     * @example
     * // Create one Book
     * const Book = await prisma.book.create({
     *   data: {
     *     // ... data to create a Book
     *   }
     * })
     * 
     */
    create<T extends bookCreateArgs>(args: SelectSubset<T, bookCreateArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Books.
     * @param {bookCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bookCreateManyArgs>(args?: SelectSubset<T, bookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Books and returns the data saved in the database.
     * @param {bookCreateManyAndReturnArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Books and only return the `book_id`
     * const bookWithBook_idOnly = await prisma.book.createManyAndReturn({
     *   select: { book_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends bookCreateManyAndReturnArgs>(args?: SelectSubset<T, bookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Book.
     * @param {bookDeleteArgs} args - Arguments to delete one Book.
     * @example
     * // Delete one Book
     * const Book = await prisma.book.delete({
     *   where: {
     *     // ... filter to delete one Book
     *   }
     * })
     * 
     */
    delete<T extends bookDeleteArgs>(args: SelectSubset<T, bookDeleteArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Book.
     * @param {bookUpdateArgs} args - Arguments to update one Book.
     * @example
     * // Update one Book
     * const book = await prisma.book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bookUpdateArgs>(args: SelectSubset<T, bookUpdateArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Books.
     * @param {bookDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bookDeleteManyArgs>(args?: SelectSubset<T, bookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bookUpdateManyArgs>(args: SelectSubset<T, bookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books and returns the data updated in the database.
     * @param {bookUpdateManyAndReturnArgs} args - Arguments to update many Books.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Books and only return the `book_id`
     * const bookWithBook_idOnly = await prisma.book.updateManyAndReturn({
     *   select: { book_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends bookUpdateManyAndReturnArgs>(args: SelectSubset<T, bookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Book.
     * @param {bookUpsertArgs} args - Arguments to update or create a Book.
     * @example
     * // Update or create a Book
     * const book = await prisma.book.upsert({
     *   create: {
     *     // ... data to create a Book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book we want to update
     *   }
     * })
     */
    upsert<T extends bookUpsertArgs>(args: SelectSubset<T, bookUpsertArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.book.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends bookCountArgs>(
      args?: Subset<T, bookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookAggregateArgs>(args: Subset<T, BookAggregateArgs>): Prisma.PrismaPromise<GetBookAggregateType<T>>

    /**
     * Group by Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends bookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bookGroupByArgs['orderBy'] }
        : { orderBy?: bookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, bookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the book model
   */
  readonly fields: bookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    publisher<T extends book$publisherArgs<ExtArgs> = {}>(args?: Subset<T, book$publisherArgs<ExtArgs>>): Prisma__publisherClient<$Result.GetResult<Prisma.$publisherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    bookauthor<T extends book$bookauthorArgs<ExtArgs> = {}>(args?: Subset<T, book$bookauthorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookauthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    copy<T extends book$copyArgs<ExtArgs> = {}>(args?: Subset<T, book$copyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$copyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    review<T extends book$reviewArgs<ExtArgs> = {}>(args?: Subset<T, book$reviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the book model
   */
  interface bookFieldRefs {
    readonly book_id: FieldRef<"book", 'Int'>
    readonly isbn: FieldRef<"book", 'String'>
    readonly title: FieldRef<"book", 'String'>
    readonly year_published: FieldRef<"book", 'Int'>
    readonly genre: FieldRef<"book", 'String'>
    readonly publisher_id: FieldRef<"book", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * book findUnique
   */
  export type bookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * Filter, which book to fetch.
     */
    where: bookWhereUniqueInput
  }

  /**
   * book findUniqueOrThrow
   */
  export type bookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * Filter, which book to fetch.
     */
    where: bookWhereUniqueInput
  }

  /**
   * book findFirst
   */
  export type bookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * Filter, which book to fetch.
     */
    where?: bookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: bookOrderByWithRelationInput | bookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for books.
     */
    cursor?: bookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * book findFirstOrThrow
   */
  export type bookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * Filter, which book to fetch.
     */
    where?: bookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: bookOrderByWithRelationInput | bookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for books.
     */
    cursor?: bookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * book findMany
   */
  export type bookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * Filter, which books to fetch.
     */
    where?: bookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: bookOrderByWithRelationInput | bookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing books.
     */
    cursor?: bookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * book create
   */
  export type bookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * The data needed to create a book.
     */
    data: XOR<bookCreateInput, bookUncheckedCreateInput>
  }

  /**
   * book createMany
   */
  export type bookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many books.
     */
    data: bookCreateManyInput | bookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * book createManyAndReturn
   */
  export type bookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * The data used to create many books.
     */
    data: bookCreateManyInput | bookCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * book update
   */
  export type bookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * The data needed to update a book.
     */
    data: XOR<bookUpdateInput, bookUncheckedUpdateInput>
    /**
     * Choose, which book to update.
     */
    where: bookWhereUniqueInput
  }

  /**
   * book updateMany
   */
  export type bookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update books.
     */
    data: XOR<bookUpdateManyMutationInput, bookUncheckedUpdateManyInput>
    /**
     * Filter which books to update
     */
    where?: bookWhereInput
    /**
     * Limit how many books to update.
     */
    limit?: number
  }

  /**
   * book updateManyAndReturn
   */
  export type bookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * The data used to update books.
     */
    data: XOR<bookUpdateManyMutationInput, bookUncheckedUpdateManyInput>
    /**
     * Filter which books to update
     */
    where?: bookWhereInput
    /**
     * Limit how many books to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * book upsert
   */
  export type bookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * The filter to search for the book to update in case it exists.
     */
    where: bookWhereUniqueInput
    /**
     * In case the book found by the `where` argument doesn't exist, create a new book with this data.
     */
    create: XOR<bookCreateInput, bookUncheckedCreateInput>
    /**
     * In case the book was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bookUpdateInput, bookUncheckedUpdateInput>
  }

  /**
   * book delete
   */
  export type bookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * Filter which book to delete.
     */
    where: bookWhereUniqueInput
  }

  /**
   * book deleteMany
   */
  export type bookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which books to delete
     */
    where?: bookWhereInput
    /**
     * Limit how many books to delete.
     */
    limit?: number
  }

  /**
   * book.publisher
   */
  export type book$publisherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publisher
     */
    select?: publisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the publisher
     */
    omit?: publisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publisherInclude<ExtArgs> | null
    where?: publisherWhereInput
  }

  /**
   * book.bookauthor
   */
  export type book$bookauthorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookauthor
     */
    select?: bookauthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookauthor
     */
    omit?: bookauthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookauthorInclude<ExtArgs> | null
    where?: bookauthorWhereInput
    orderBy?: bookauthorOrderByWithRelationInput | bookauthorOrderByWithRelationInput[]
    cursor?: bookauthorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookauthorScalarFieldEnum | BookauthorScalarFieldEnum[]
  }

  /**
   * book.copy
   */
  export type book$copyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the copy
     */
    select?: copySelect<ExtArgs> | null
    /**
     * Omit specific fields from the copy
     */
    omit?: copyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: copyInclude<ExtArgs> | null
    where?: copyWhereInput
    orderBy?: copyOrderByWithRelationInput | copyOrderByWithRelationInput[]
    cursor?: copyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CopyScalarFieldEnum | CopyScalarFieldEnum[]
  }

  /**
   * book.review
   */
  export type book$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    cursor?: reviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * book without action
   */
  export type bookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
  }


  /**
   * Model bookauthor
   */

  export type AggregateBookauthor = {
    _count: BookauthorCountAggregateOutputType | null
    _avg: BookauthorAvgAggregateOutputType | null
    _sum: BookauthorSumAggregateOutputType | null
    _min: BookauthorMinAggregateOutputType | null
    _max: BookauthorMaxAggregateOutputType | null
  }

  export type BookauthorAvgAggregateOutputType = {
    book_id: number | null
    author_id: number | null
  }

  export type BookauthorSumAggregateOutputType = {
    book_id: number | null
    author_id: number | null
  }

  export type BookauthorMinAggregateOutputType = {
    book_id: number | null
    author_id: number | null
  }

  export type BookauthorMaxAggregateOutputType = {
    book_id: number | null
    author_id: number | null
  }

  export type BookauthorCountAggregateOutputType = {
    book_id: number
    author_id: number
    _all: number
  }


  export type BookauthorAvgAggregateInputType = {
    book_id?: true
    author_id?: true
  }

  export type BookauthorSumAggregateInputType = {
    book_id?: true
    author_id?: true
  }

  export type BookauthorMinAggregateInputType = {
    book_id?: true
    author_id?: true
  }

  export type BookauthorMaxAggregateInputType = {
    book_id?: true
    author_id?: true
  }

  export type BookauthorCountAggregateInputType = {
    book_id?: true
    author_id?: true
    _all?: true
  }

  export type BookauthorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookauthor to aggregate.
     */
    where?: bookauthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookauthors to fetch.
     */
    orderBy?: bookauthorOrderByWithRelationInput | bookauthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bookauthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookauthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookauthors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bookauthors
    **/
    _count?: true | BookauthorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookauthorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookauthorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookauthorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookauthorMaxAggregateInputType
  }

  export type GetBookauthorAggregateType<T extends BookauthorAggregateArgs> = {
        [P in keyof T & keyof AggregateBookauthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookauthor[P]>
      : GetScalarType<T[P], AggregateBookauthor[P]>
  }




  export type bookauthorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookauthorWhereInput
    orderBy?: bookauthorOrderByWithAggregationInput | bookauthorOrderByWithAggregationInput[]
    by: BookauthorScalarFieldEnum[] | BookauthorScalarFieldEnum
    having?: bookauthorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookauthorCountAggregateInputType | true
    _avg?: BookauthorAvgAggregateInputType
    _sum?: BookauthorSumAggregateInputType
    _min?: BookauthorMinAggregateInputType
    _max?: BookauthorMaxAggregateInputType
  }

  export type BookauthorGroupByOutputType = {
    book_id: number
    author_id: number
    _count: BookauthorCountAggregateOutputType | null
    _avg: BookauthorAvgAggregateOutputType | null
    _sum: BookauthorSumAggregateOutputType | null
    _min: BookauthorMinAggregateOutputType | null
    _max: BookauthorMaxAggregateOutputType | null
  }

  type GetBookauthorGroupByPayload<T extends bookauthorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookauthorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookauthorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookauthorGroupByOutputType[P]>
            : GetScalarType<T[P], BookauthorGroupByOutputType[P]>
        }
      >
    >


  export type bookauthorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    book_id?: boolean
    author_id?: boolean
    author?: boolean | authorDefaultArgs<ExtArgs>
    book?: boolean | bookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookauthor"]>

  export type bookauthorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    book_id?: boolean
    author_id?: boolean
    author?: boolean | authorDefaultArgs<ExtArgs>
    book?: boolean | bookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookauthor"]>

  export type bookauthorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    book_id?: boolean
    author_id?: boolean
    author?: boolean | authorDefaultArgs<ExtArgs>
    book?: boolean | bookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookauthor"]>

  export type bookauthorSelectScalar = {
    book_id?: boolean
    author_id?: boolean
  }

  export type bookauthorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"book_id" | "author_id", ExtArgs["result"]["bookauthor"]>
  export type bookauthorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | authorDefaultArgs<ExtArgs>
    book?: boolean | bookDefaultArgs<ExtArgs>
  }
  export type bookauthorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | authorDefaultArgs<ExtArgs>
    book?: boolean | bookDefaultArgs<ExtArgs>
  }
  export type bookauthorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | authorDefaultArgs<ExtArgs>
    book?: boolean | bookDefaultArgs<ExtArgs>
  }

  export type $bookauthorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bookauthor"
    objects: {
      author: Prisma.$authorPayload<ExtArgs>
      book: Prisma.$bookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      book_id: number
      author_id: number
    }, ExtArgs["result"]["bookauthor"]>
    composites: {}
  }

  type bookauthorGetPayload<S extends boolean | null | undefined | bookauthorDefaultArgs> = $Result.GetResult<Prisma.$bookauthorPayload, S>

  type bookauthorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bookauthorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookauthorCountAggregateInputType | true
    }

  export interface bookauthorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bookauthor'], meta: { name: 'bookauthor' } }
    /**
     * Find zero or one Bookauthor that matches the filter.
     * @param {bookauthorFindUniqueArgs} args - Arguments to find a Bookauthor
     * @example
     * // Get one Bookauthor
     * const bookauthor = await prisma.bookauthor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bookauthorFindUniqueArgs>(args: SelectSubset<T, bookauthorFindUniqueArgs<ExtArgs>>): Prisma__bookauthorClient<$Result.GetResult<Prisma.$bookauthorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bookauthor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bookauthorFindUniqueOrThrowArgs} args - Arguments to find a Bookauthor
     * @example
     * // Get one Bookauthor
     * const bookauthor = await prisma.bookauthor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bookauthorFindUniqueOrThrowArgs>(args: SelectSubset<T, bookauthorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bookauthorClient<$Result.GetResult<Prisma.$bookauthorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookauthor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookauthorFindFirstArgs} args - Arguments to find a Bookauthor
     * @example
     * // Get one Bookauthor
     * const bookauthor = await prisma.bookauthor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bookauthorFindFirstArgs>(args?: SelectSubset<T, bookauthorFindFirstArgs<ExtArgs>>): Prisma__bookauthorClient<$Result.GetResult<Prisma.$bookauthorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookauthor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookauthorFindFirstOrThrowArgs} args - Arguments to find a Bookauthor
     * @example
     * // Get one Bookauthor
     * const bookauthor = await prisma.bookauthor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bookauthorFindFirstOrThrowArgs>(args?: SelectSubset<T, bookauthorFindFirstOrThrowArgs<ExtArgs>>): Prisma__bookauthorClient<$Result.GetResult<Prisma.$bookauthorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookauthors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookauthorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookauthors
     * const bookauthors = await prisma.bookauthor.findMany()
     * 
     * // Get first 10 Bookauthors
     * const bookauthors = await prisma.bookauthor.findMany({ take: 10 })
     * 
     * // Only select the `book_id`
     * const bookauthorWithBook_idOnly = await prisma.bookauthor.findMany({ select: { book_id: true } })
     * 
     */
    findMany<T extends bookauthorFindManyArgs>(args?: SelectSubset<T, bookauthorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookauthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bookauthor.
     * @param {bookauthorCreateArgs} args - Arguments to create a Bookauthor.
     * @example
     * // Create one Bookauthor
     * const Bookauthor = await prisma.bookauthor.create({
     *   data: {
     *     // ... data to create a Bookauthor
     *   }
     * })
     * 
     */
    create<T extends bookauthorCreateArgs>(args: SelectSubset<T, bookauthorCreateArgs<ExtArgs>>): Prisma__bookauthorClient<$Result.GetResult<Prisma.$bookauthorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookauthors.
     * @param {bookauthorCreateManyArgs} args - Arguments to create many Bookauthors.
     * @example
     * // Create many Bookauthors
     * const bookauthor = await prisma.bookauthor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bookauthorCreateManyArgs>(args?: SelectSubset<T, bookauthorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookauthors and returns the data saved in the database.
     * @param {bookauthorCreateManyAndReturnArgs} args - Arguments to create many Bookauthors.
     * @example
     * // Create many Bookauthors
     * const bookauthor = await prisma.bookauthor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookauthors and only return the `book_id`
     * const bookauthorWithBook_idOnly = await prisma.bookauthor.createManyAndReturn({
     *   select: { book_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends bookauthorCreateManyAndReturnArgs>(args?: SelectSubset<T, bookauthorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookauthorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bookauthor.
     * @param {bookauthorDeleteArgs} args - Arguments to delete one Bookauthor.
     * @example
     * // Delete one Bookauthor
     * const Bookauthor = await prisma.bookauthor.delete({
     *   where: {
     *     // ... filter to delete one Bookauthor
     *   }
     * })
     * 
     */
    delete<T extends bookauthorDeleteArgs>(args: SelectSubset<T, bookauthorDeleteArgs<ExtArgs>>): Prisma__bookauthorClient<$Result.GetResult<Prisma.$bookauthorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bookauthor.
     * @param {bookauthorUpdateArgs} args - Arguments to update one Bookauthor.
     * @example
     * // Update one Bookauthor
     * const bookauthor = await prisma.bookauthor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bookauthorUpdateArgs>(args: SelectSubset<T, bookauthorUpdateArgs<ExtArgs>>): Prisma__bookauthorClient<$Result.GetResult<Prisma.$bookauthorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookauthors.
     * @param {bookauthorDeleteManyArgs} args - Arguments to filter Bookauthors to delete.
     * @example
     * // Delete a few Bookauthors
     * const { count } = await prisma.bookauthor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bookauthorDeleteManyArgs>(args?: SelectSubset<T, bookauthorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookauthors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookauthorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookauthors
     * const bookauthor = await prisma.bookauthor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bookauthorUpdateManyArgs>(args: SelectSubset<T, bookauthorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookauthors and returns the data updated in the database.
     * @param {bookauthorUpdateManyAndReturnArgs} args - Arguments to update many Bookauthors.
     * @example
     * // Update many Bookauthors
     * const bookauthor = await prisma.bookauthor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookauthors and only return the `book_id`
     * const bookauthorWithBook_idOnly = await prisma.bookauthor.updateManyAndReturn({
     *   select: { book_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends bookauthorUpdateManyAndReturnArgs>(args: SelectSubset<T, bookauthorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookauthorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bookauthor.
     * @param {bookauthorUpsertArgs} args - Arguments to update or create a Bookauthor.
     * @example
     * // Update or create a Bookauthor
     * const bookauthor = await prisma.bookauthor.upsert({
     *   create: {
     *     // ... data to create a Bookauthor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bookauthor we want to update
     *   }
     * })
     */
    upsert<T extends bookauthorUpsertArgs>(args: SelectSubset<T, bookauthorUpsertArgs<ExtArgs>>): Prisma__bookauthorClient<$Result.GetResult<Prisma.$bookauthorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookauthors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookauthorCountArgs} args - Arguments to filter Bookauthors to count.
     * @example
     * // Count the number of Bookauthors
     * const count = await prisma.bookauthor.count({
     *   where: {
     *     // ... the filter for the Bookauthors we want to count
     *   }
     * })
    **/
    count<T extends bookauthorCountArgs>(
      args?: Subset<T, bookauthorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookauthorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bookauthor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookauthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookauthorAggregateArgs>(args: Subset<T, BookauthorAggregateArgs>): Prisma.PrismaPromise<GetBookauthorAggregateType<T>>

    /**
     * Group by Bookauthor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookauthorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends bookauthorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bookauthorGroupByArgs['orderBy'] }
        : { orderBy?: bookauthorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, bookauthorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookauthorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bookauthor model
   */
  readonly fields: bookauthorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bookauthor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bookauthorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends authorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, authorDefaultArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    book<T extends bookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, bookDefaultArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the bookauthor model
   */
  interface bookauthorFieldRefs {
    readonly book_id: FieldRef<"bookauthor", 'Int'>
    readonly author_id: FieldRef<"bookauthor", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * bookauthor findUnique
   */
  export type bookauthorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookauthor
     */
    select?: bookauthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookauthor
     */
    omit?: bookauthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookauthorInclude<ExtArgs> | null
    /**
     * Filter, which bookauthor to fetch.
     */
    where: bookauthorWhereUniqueInput
  }

  /**
   * bookauthor findUniqueOrThrow
   */
  export type bookauthorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookauthor
     */
    select?: bookauthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookauthor
     */
    omit?: bookauthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookauthorInclude<ExtArgs> | null
    /**
     * Filter, which bookauthor to fetch.
     */
    where: bookauthorWhereUniqueInput
  }

  /**
   * bookauthor findFirst
   */
  export type bookauthorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookauthor
     */
    select?: bookauthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookauthor
     */
    omit?: bookauthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookauthorInclude<ExtArgs> | null
    /**
     * Filter, which bookauthor to fetch.
     */
    where?: bookauthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookauthors to fetch.
     */
    orderBy?: bookauthorOrderByWithRelationInput | bookauthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookauthors.
     */
    cursor?: bookauthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookauthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookauthors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookauthors.
     */
    distinct?: BookauthorScalarFieldEnum | BookauthorScalarFieldEnum[]
  }

  /**
   * bookauthor findFirstOrThrow
   */
  export type bookauthorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookauthor
     */
    select?: bookauthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookauthor
     */
    omit?: bookauthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookauthorInclude<ExtArgs> | null
    /**
     * Filter, which bookauthor to fetch.
     */
    where?: bookauthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookauthors to fetch.
     */
    orderBy?: bookauthorOrderByWithRelationInput | bookauthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookauthors.
     */
    cursor?: bookauthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookauthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookauthors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookauthors.
     */
    distinct?: BookauthorScalarFieldEnum | BookauthorScalarFieldEnum[]
  }

  /**
   * bookauthor findMany
   */
  export type bookauthorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookauthor
     */
    select?: bookauthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookauthor
     */
    omit?: bookauthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookauthorInclude<ExtArgs> | null
    /**
     * Filter, which bookauthors to fetch.
     */
    where?: bookauthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookauthors to fetch.
     */
    orderBy?: bookauthorOrderByWithRelationInput | bookauthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bookauthors.
     */
    cursor?: bookauthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookauthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookauthors.
     */
    skip?: number
    distinct?: BookauthorScalarFieldEnum | BookauthorScalarFieldEnum[]
  }

  /**
   * bookauthor create
   */
  export type bookauthorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookauthor
     */
    select?: bookauthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookauthor
     */
    omit?: bookauthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookauthorInclude<ExtArgs> | null
    /**
     * The data needed to create a bookauthor.
     */
    data: XOR<bookauthorCreateInput, bookauthorUncheckedCreateInput>
  }

  /**
   * bookauthor createMany
   */
  export type bookauthorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bookauthors.
     */
    data: bookauthorCreateManyInput | bookauthorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bookauthor createManyAndReturn
   */
  export type bookauthorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookauthor
     */
    select?: bookauthorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bookauthor
     */
    omit?: bookauthorOmit<ExtArgs> | null
    /**
     * The data used to create many bookauthors.
     */
    data: bookauthorCreateManyInput | bookauthorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookauthorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * bookauthor update
   */
  export type bookauthorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookauthor
     */
    select?: bookauthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookauthor
     */
    omit?: bookauthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookauthorInclude<ExtArgs> | null
    /**
     * The data needed to update a bookauthor.
     */
    data: XOR<bookauthorUpdateInput, bookauthorUncheckedUpdateInput>
    /**
     * Choose, which bookauthor to update.
     */
    where: bookauthorWhereUniqueInput
  }

  /**
   * bookauthor updateMany
   */
  export type bookauthorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bookauthors.
     */
    data: XOR<bookauthorUpdateManyMutationInput, bookauthorUncheckedUpdateManyInput>
    /**
     * Filter which bookauthors to update
     */
    where?: bookauthorWhereInput
    /**
     * Limit how many bookauthors to update.
     */
    limit?: number
  }

  /**
   * bookauthor updateManyAndReturn
   */
  export type bookauthorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookauthor
     */
    select?: bookauthorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bookauthor
     */
    omit?: bookauthorOmit<ExtArgs> | null
    /**
     * The data used to update bookauthors.
     */
    data: XOR<bookauthorUpdateManyMutationInput, bookauthorUncheckedUpdateManyInput>
    /**
     * Filter which bookauthors to update
     */
    where?: bookauthorWhereInput
    /**
     * Limit how many bookauthors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookauthorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * bookauthor upsert
   */
  export type bookauthorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookauthor
     */
    select?: bookauthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookauthor
     */
    omit?: bookauthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookauthorInclude<ExtArgs> | null
    /**
     * The filter to search for the bookauthor to update in case it exists.
     */
    where: bookauthorWhereUniqueInput
    /**
     * In case the bookauthor found by the `where` argument doesn't exist, create a new bookauthor with this data.
     */
    create: XOR<bookauthorCreateInput, bookauthorUncheckedCreateInput>
    /**
     * In case the bookauthor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bookauthorUpdateInput, bookauthorUncheckedUpdateInput>
  }

  /**
   * bookauthor delete
   */
  export type bookauthorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookauthor
     */
    select?: bookauthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookauthor
     */
    omit?: bookauthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookauthorInclude<ExtArgs> | null
    /**
     * Filter which bookauthor to delete.
     */
    where: bookauthorWhereUniqueInput
  }

  /**
   * bookauthor deleteMany
   */
  export type bookauthorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookauthors to delete
     */
    where?: bookauthorWhereInput
    /**
     * Limit how many bookauthors to delete.
     */
    limit?: number
  }

  /**
   * bookauthor without action
   */
  export type bookauthorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookauthor
     */
    select?: bookauthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookauthor
     */
    omit?: bookauthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookauthorInclude<ExtArgs> | null
  }


  /**
   * Model copy
   */

  export type AggregateCopy = {
    _count: CopyCountAggregateOutputType | null
    _avg: CopyAvgAggregateOutputType | null
    _sum: CopySumAggregateOutputType | null
    _min: CopyMinAggregateOutputType | null
    _max: CopyMaxAggregateOutputType | null
  }

  export type CopyAvgAggregateOutputType = {
    copy_id: number | null
    book_id: number | null
  }

  export type CopySumAggregateOutputType = {
    copy_id: number | null
    book_id: number | null
  }

  export type CopyMinAggregateOutputType = {
    copy_id: number | null
    book_id: number | null
    condition: string | null
    is_availible: boolean | null
  }

  export type CopyMaxAggregateOutputType = {
    copy_id: number | null
    book_id: number | null
    condition: string | null
    is_availible: boolean | null
  }

  export type CopyCountAggregateOutputType = {
    copy_id: number
    book_id: number
    condition: number
    is_availible: number
    _all: number
  }


  export type CopyAvgAggregateInputType = {
    copy_id?: true
    book_id?: true
  }

  export type CopySumAggregateInputType = {
    copy_id?: true
    book_id?: true
  }

  export type CopyMinAggregateInputType = {
    copy_id?: true
    book_id?: true
    condition?: true
    is_availible?: true
  }

  export type CopyMaxAggregateInputType = {
    copy_id?: true
    book_id?: true
    condition?: true
    is_availible?: true
  }

  export type CopyCountAggregateInputType = {
    copy_id?: true
    book_id?: true
    condition?: true
    is_availible?: true
    _all?: true
  }

  export type CopyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which copy to aggregate.
     */
    where?: copyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of copies to fetch.
     */
    orderBy?: copyOrderByWithRelationInput | copyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: copyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` copies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` copies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned copies
    **/
    _count?: true | CopyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CopyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CopySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CopyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CopyMaxAggregateInputType
  }

  export type GetCopyAggregateType<T extends CopyAggregateArgs> = {
        [P in keyof T & keyof AggregateCopy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCopy[P]>
      : GetScalarType<T[P], AggregateCopy[P]>
  }




  export type copyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: copyWhereInput
    orderBy?: copyOrderByWithAggregationInput | copyOrderByWithAggregationInput[]
    by: CopyScalarFieldEnum[] | CopyScalarFieldEnum
    having?: copyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CopyCountAggregateInputType | true
    _avg?: CopyAvgAggregateInputType
    _sum?: CopySumAggregateInputType
    _min?: CopyMinAggregateInputType
    _max?: CopyMaxAggregateInputType
  }

  export type CopyGroupByOutputType = {
    copy_id: number
    book_id: number | null
    condition: string | null
    is_availible: boolean | null
    _count: CopyCountAggregateOutputType | null
    _avg: CopyAvgAggregateOutputType | null
    _sum: CopySumAggregateOutputType | null
    _min: CopyMinAggregateOutputType | null
    _max: CopyMaxAggregateOutputType | null
  }

  type GetCopyGroupByPayload<T extends copyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CopyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CopyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CopyGroupByOutputType[P]>
            : GetScalarType<T[P], CopyGroupByOutputType[P]>
        }
      >
    >


  export type copySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    copy_id?: boolean
    book_id?: boolean
    condition?: boolean
    is_availible?: boolean
    book?: boolean | copy$bookArgs<ExtArgs>
    loan?: boolean | copy$loanArgs<ExtArgs>
    _count?: boolean | CopyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["copy"]>

  export type copySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    copy_id?: boolean
    book_id?: boolean
    condition?: boolean
    is_availible?: boolean
    book?: boolean | copy$bookArgs<ExtArgs>
  }, ExtArgs["result"]["copy"]>

  export type copySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    copy_id?: boolean
    book_id?: boolean
    condition?: boolean
    is_availible?: boolean
    book?: boolean | copy$bookArgs<ExtArgs>
  }, ExtArgs["result"]["copy"]>

  export type copySelectScalar = {
    copy_id?: boolean
    book_id?: boolean
    condition?: boolean
    is_availible?: boolean
  }

  export type copyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"copy_id" | "book_id" | "condition" | "is_availible", ExtArgs["result"]["copy"]>
  export type copyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | copy$bookArgs<ExtArgs>
    loan?: boolean | copy$loanArgs<ExtArgs>
    _count?: boolean | CopyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type copyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | copy$bookArgs<ExtArgs>
  }
  export type copyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | copy$bookArgs<ExtArgs>
  }

  export type $copyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "copy"
    objects: {
      book: Prisma.$bookPayload<ExtArgs> | null
      loan: Prisma.$loanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      copy_id: number
      book_id: number | null
      condition: string | null
      is_availible: boolean | null
    }, ExtArgs["result"]["copy"]>
    composites: {}
  }

  type copyGetPayload<S extends boolean | null | undefined | copyDefaultArgs> = $Result.GetResult<Prisma.$copyPayload, S>

  type copyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<copyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CopyCountAggregateInputType | true
    }

  export interface copyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['copy'], meta: { name: 'copy' } }
    /**
     * Find zero or one Copy that matches the filter.
     * @param {copyFindUniqueArgs} args - Arguments to find a Copy
     * @example
     * // Get one Copy
     * const copy = await prisma.copy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends copyFindUniqueArgs>(args: SelectSubset<T, copyFindUniqueArgs<ExtArgs>>): Prisma__copyClient<$Result.GetResult<Prisma.$copyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Copy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {copyFindUniqueOrThrowArgs} args - Arguments to find a Copy
     * @example
     * // Get one Copy
     * const copy = await prisma.copy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends copyFindUniqueOrThrowArgs>(args: SelectSubset<T, copyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__copyClient<$Result.GetResult<Prisma.$copyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Copy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {copyFindFirstArgs} args - Arguments to find a Copy
     * @example
     * // Get one Copy
     * const copy = await prisma.copy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends copyFindFirstArgs>(args?: SelectSubset<T, copyFindFirstArgs<ExtArgs>>): Prisma__copyClient<$Result.GetResult<Prisma.$copyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Copy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {copyFindFirstOrThrowArgs} args - Arguments to find a Copy
     * @example
     * // Get one Copy
     * const copy = await prisma.copy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends copyFindFirstOrThrowArgs>(args?: SelectSubset<T, copyFindFirstOrThrowArgs<ExtArgs>>): Prisma__copyClient<$Result.GetResult<Prisma.$copyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Copies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {copyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Copies
     * const copies = await prisma.copy.findMany()
     * 
     * // Get first 10 Copies
     * const copies = await prisma.copy.findMany({ take: 10 })
     * 
     * // Only select the `copy_id`
     * const copyWithCopy_idOnly = await prisma.copy.findMany({ select: { copy_id: true } })
     * 
     */
    findMany<T extends copyFindManyArgs>(args?: SelectSubset<T, copyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$copyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Copy.
     * @param {copyCreateArgs} args - Arguments to create a Copy.
     * @example
     * // Create one Copy
     * const Copy = await prisma.copy.create({
     *   data: {
     *     // ... data to create a Copy
     *   }
     * })
     * 
     */
    create<T extends copyCreateArgs>(args: SelectSubset<T, copyCreateArgs<ExtArgs>>): Prisma__copyClient<$Result.GetResult<Prisma.$copyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Copies.
     * @param {copyCreateManyArgs} args - Arguments to create many Copies.
     * @example
     * // Create many Copies
     * const copy = await prisma.copy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends copyCreateManyArgs>(args?: SelectSubset<T, copyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Copies and returns the data saved in the database.
     * @param {copyCreateManyAndReturnArgs} args - Arguments to create many Copies.
     * @example
     * // Create many Copies
     * const copy = await prisma.copy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Copies and only return the `copy_id`
     * const copyWithCopy_idOnly = await prisma.copy.createManyAndReturn({
     *   select: { copy_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends copyCreateManyAndReturnArgs>(args?: SelectSubset<T, copyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$copyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Copy.
     * @param {copyDeleteArgs} args - Arguments to delete one Copy.
     * @example
     * // Delete one Copy
     * const Copy = await prisma.copy.delete({
     *   where: {
     *     // ... filter to delete one Copy
     *   }
     * })
     * 
     */
    delete<T extends copyDeleteArgs>(args: SelectSubset<T, copyDeleteArgs<ExtArgs>>): Prisma__copyClient<$Result.GetResult<Prisma.$copyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Copy.
     * @param {copyUpdateArgs} args - Arguments to update one Copy.
     * @example
     * // Update one Copy
     * const copy = await prisma.copy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends copyUpdateArgs>(args: SelectSubset<T, copyUpdateArgs<ExtArgs>>): Prisma__copyClient<$Result.GetResult<Prisma.$copyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Copies.
     * @param {copyDeleteManyArgs} args - Arguments to filter Copies to delete.
     * @example
     * // Delete a few Copies
     * const { count } = await prisma.copy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends copyDeleteManyArgs>(args?: SelectSubset<T, copyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Copies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {copyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Copies
     * const copy = await prisma.copy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends copyUpdateManyArgs>(args: SelectSubset<T, copyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Copies and returns the data updated in the database.
     * @param {copyUpdateManyAndReturnArgs} args - Arguments to update many Copies.
     * @example
     * // Update many Copies
     * const copy = await prisma.copy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Copies and only return the `copy_id`
     * const copyWithCopy_idOnly = await prisma.copy.updateManyAndReturn({
     *   select: { copy_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends copyUpdateManyAndReturnArgs>(args: SelectSubset<T, copyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$copyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Copy.
     * @param {copyUpsertArgs} args - Arguments to update or create a Copy.
     * @example
     * // Update or create a Copy
     * const copy = await prisma.copy.upsert({
     *   create: {
     *     // ... data to create a Copy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Copy we want to update
     *   }
     * })
     */
    upsert<T extends copyUpsertArgs>(args: SelectSubset<T, copyUpsertArgs<ExtArgs>>): Prisma__copyClient<$Result.GetResult<Prisma.$copyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Copies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {copyCountArgs} args - Arguments to filter Copies to count.
     * @example
     * // Count the number of Copies
     * const count = await prisma.copy.count({
     *   where: {
     *     // ... the filter for the Copies we want to count
     *   }
     * })
    **/
    count<T extends copyCountArgs>(
      args?: Subset<T, copyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CopyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Copy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CopyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CopyAggregateArgs>(args: Subset<T, CopyAggregateArgs>): Prisma.PrismaPromise<GetCopyAggregateType<T>>

    /**
     * Group by Copy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {copyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends copyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: copyGroupByArgs['orderBy'] }
        : { orderBy?: copyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, copyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCopyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the copy model
   */
  readonly fields: copyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for copy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__copyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends copy$bookArgs<ExtArgs> = {}>(args?: Subset<T, copy$bookArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    loan<T extends copy$loanArgs<ExtArgs> = {}>(args?: Subset<T, copy$loanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the copy model
   */
  interface copyFieldRefs {
    readonly copy_id: FieldRef<"copy", 'Int'>
    readonly book_id: FieldRef<"copy", 'Int'>
    readonly condition: FieldRef<"copy", 'String'>
    readonly is_availible: FieldRef<"copy", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * copy findUnique
   */
  export type copyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the copy
     */
    select?: copySelect<ExtArgs> | null
    /**
     * Omit specific fields from the copy
     */
    omit?: copyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: copyInclude<ExtArgs> | null
    /**
     * Filter, which copy to fetch.
     */
    where: copyWhereUniqueInput
  }

  /**
   * copy findUniqueOrThrow
   */
  export type copyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the copy
     */
    select?: copySelect<ExtArgs> | null
    /**
     * Omit specific fields from the copy
     */
    omit?: copyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: copyInclude<ExtArgs> | null
    /**
     * Filter, which copy to fetch.
     */
    where: copyWhereUniqueInput
  }

  /**
   * copy findFirst
   */
  export type copyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the copy
     */
    select?: copySelect<ExtArgs> | null
    /**
     * Omit specific fields from the copy
     */
    omit?: copyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: copyInclude<ExtArgs> | null
    /**
     * Filter, which copy to fetch.
     */
    where?: copyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of copies to fetch.
     */
    orderBy?: copyOrderByWithRelationInput | copyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for copies.
     */
    cursor?: copyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` copies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` copies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of copies.
     */
    distinct?: CopyScalarFieldEnum | CopyScalarFieldEnum[]
  }

  /**
   * copy findFirstOrThrow
   */
  export type copyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the copy
     */
    select?: copySelect<ExtArgs> | null
    /**
     * Omit specific fields from the copy
     */
    omit?: copyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: copyInclude<ExtArgs> | null
    /**
     * Filter, which copy to fetch.
     */
    where?: copyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of copies to fetch.
     */
    orderBy?: copyOrderByWithRelationInput | copyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for copies.
     */
    cursor?: copyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` copies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` copies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of copies.
     */
    distinct?: CopyScalarFieldEnum | CopyScalarFieldEnum[]
  }

  /**
   * copy findMany
   */
  export type copyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the copy
     */
    select?: copySelect<ExtArgs> | null
    /**
     * Omit specific fields from the copy
     */
    omit?: copyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: copyInclude<ExtArgs> | null
    /**
     * Filter, which copies to fetch.
     */
    where?: copyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of copies to fetch.
     */
    orderBy?: copyOrderByWithRelationInput | copyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing copies.
     */
    cursor?: copyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` copies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` copies.
     */
    skip?: number
    distinct?: CopyScalarFieldEnum | CopyScalarFieldEnum[]
  }

  /**
   * copy create
   */
  export type copyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the copy
     */
    select?: copySelect<ExtArgs> | null
    /**
     * Omit specific fields from the copy
     */
    omit?: copyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: copyInclude<ExtArgs> | null
    /**
     * The data needed to create a copy.
     */
    data?: XOR<copyCreateInput, copyUncheckedCreateInput>
  }

  /**
   * copy createMany
   */
  export type copyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many copies.
     */
    data: copyCreateManyInput | copyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * copy createManyAndReturn
   */
  export type copyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the copy
     */
    select?: copySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the copy
     */
    omit?: copyOmit<ExtArgs> | null
    /**
     * The data used to create many copies.
     */
    data: copyCreateManyInput | copyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: copyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * copy update
   */
  export type copyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the copy
     */
    select?: copySelect<ExtArgs> | null
    /**
     * Omit specific fields from the copy
     */
    omit?: copyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: copyInclude<ExtArgs> | null
    /**
     * The data needed to update a copy.
     */
    data: XOR<copyUpdateInput, copyUncheckedUpdateInput>
    /**
     * Choose, which copy to update.
     */
    where: copyWhereUniqueInput
  }

  /**
   * copy updateMany
   */
  export type copyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update copies.
     */
    data: XOR<copyUpdateManyMutationInput, copyUncheckedUpdateManyInput>
    /**
     * Filter which copies to update
     */
    where?: copyWhereInput
    /**
     * Limit how many copies to update.
     */
    limit?: number
  }

  /**
   * copy updateManyAndReturn
   */
  export type copyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the copy
     */
    select?: copySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the copy
     */
    omit?: copyOmit<ExtArgs> | null
    /**
     * The data used to update copies.
     */
    data: XOR<copyUpdateManyMutationInput, copyUncheckedUpdateManyInput>
    /**
     * Filter which copies to update
     */
    where?: copyWhereInput
    /**
     * Limit how many copies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: copyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * copy upsert
   */
  export type copyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the copy
     */
    select?: copySelect<ExtArgs> | null
    /**
     * Omit specific fields from the copy
     */
    omit?: copyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: copyInclude<ExtArgs> | null
    /**
     * The filter to search for the copy to update in case it exists.
     */
    where: copyWhereUniqueInput
    /**
     * In case the copy found by the `where` argument doesn't exist, create a new copy with this data.
     */
    create: XOR<copyCreateInput, copyUncheckedCreateInput>
    /**
     * In case the copy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<copyUpdateInput, copyUncheckedUpdateInput>
  }

  /**
   * copy delete
   */
  export type copyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the copy
     */
    select?: copySelect<ExtArgs> | null
    /**
     * Omit specific fields from the copy
     */
    omit?: copyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: copyInclude<ExtArgs> | null
    /**
     * Filter which copy to delete.
     */
    where: copyWhereUniqueInput
  }

  /**
   * copy deleteMany
   */
  export type copyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which copies to delete
     */
    where?: copyWhereInput
    /**
     * Limit how many copies to delete.
     */
    limit?: number
  }

  /**
   * copy.book
   */
  export type copy$bookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    where?: bookWhereInput
  }

  /**
   * copy.loan
   */
  export type copy$loanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan
     */
    omit?: loanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loanInclude<ExtArgs> | null
    where?: loanWhereInput
    orderBy?: loanOrderByWithRelationInput | loanOrderByWithRelationInput[]
    cursor?: loanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[]
  }

  /**
   * copy without action
   */
  export type copyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the copy
     */
    select?: copySelect<ExtArgs> | null
    /**
     * Omit specific fields from the copy
     */
    omit?: copyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: copyInclude<ExtArgs> | null
  }


  /**
   * Model fine
   */

  export type AggregateFine = {
    _count: FineCountAggregateOutputType | null
    _avg: FineAvgAggregateOutputType | null
    _sum: FineSumAggregateOutputType | null
    _min: FineMinAggregateOutputType | null
    _max: FineMaxAggregateOutputType | null
  }

  export type FineAvgAggregateOutputType = {
    fine_id: number | null
    loan_id: number | null
    amount: Decimal | null
  }

  export type FineSumAggregateOutputType = {
    fine_id: number | null
    loan_id: number | null
    amount: Decimal | null
  }

  export type FineMinAggregateOutputType = {
    fine_id: number | null
    loan_id: number | null
    amount: Decimal | null
  }

  export type FineMaxAggregateOutputType = {
    fine_id: number | null
    loan_id: number | null
    amount: Decimal | null
  }

  export type FineCountAggregateOutputType = {
    fine_id: number
    loan_id: number
    amount: number
    _all: number
  }


  export type FineAvgAggregateInputType = {
    fine_id?: true
    loan_id?: true
    amount?: true
  }

  export type FineSumAggregateInputType = {
    fine_id?: true
    loan_id?: true
    amount?: true
  }

  export type FineMinAggregateInputType = {
    fine_id?: true
    loan_id?: true
    amount?: true
  }

  export type FineMaxAggregateInputType = {
    fine_id?: true
    loan_id?: true
    amount?: true
  }

  export type FineCountAggregateInputType = {
    fine_id?: true
    loan_id?: true
    amount?: true
    _all?: true
  }

  export type FineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fine to aggregate.
     */
    where?: fineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fines to fetch.
     */
    orderBy?: fineOrderByWithRelationInput | fineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: fineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned fines
    **/
    _count?: true | FineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FineMaxAggregateInputType
  }

  export type GetFineAggregateType<T extends FineAggregateArgs> = {
        [P in keyof T & keyof AggregateFine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFine[P]>
      : GetScalarType<T[P], AggregateFine[P]>
  }




  export type fineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fineWhereInput
    orderBy?: fineOrderByWithAggregationInput | fineOrderByWithAggregationInput[]
    by: FineScalarFieldEnum[] | FineScalarFieldEnum
    having?: fineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FineCountAggregateInputType | true
    _avg?: FineAvgAggregateInputType
    _sum?: FineSumAggregateInputType
    _min?: FineMinAggregateInputType
    _max?: FineMaxAggregateInputType
  }

  export type FineGroupByOutputType = {
    fine_id: number
    loan_id: number | null
    amount: Decimal
    _count: FineCountAggregateOutputType | null
    _avg: FineAvgAggregateOutputType | null
    _sum: FineSumAggregateOutputType | null
    _min: FineMinAggregateOutputType | null
    _max: FineMaxAggregateOutputType | null
  }

  type GetFineGroupByPayload<T extends fineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FineGroupByOutputType[P]>
            : GetScalarType<T[P], FineGroupByOutputType[P]>
        }
      >
    >


  export type fineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fine_id?: boolean
    loan_id?: boolean
    amount?: boolean
    loan?: boolean | fine$loanArgs<ExtArgs>
  }, ExtArgs["result"]["fine"]>

  export type fineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fine_id?: boolean
    loan_id?: boolean
    amount?: boolean
    loan?: boolean | fine$loanArgs<ExtArgs>
  }, ExtArgs["result"]["fine"]>

  export type fineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fine_id?: boolean
    loan_id?: boolean
    amount?: boolean
    loan?: boolean | fine$loanArgs<ExtArgs>
  }, ExtArgs["result"]["fine"]>

  export type fineSelectScalar = {
    fine_id?: boolean
    loan_id?: boolean
    amount?: boolean
  }

  export type fineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"fine_id" | "loan_id" | "amount", ExtArgs["result"]["fine"]>
  export type fineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loan?: boolean | fine$loanArgs<ExtArgs>
  }
  export type fineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loan?: boolean | fine$loanArgs<ExtArgs>
  }
  export type fineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loan?: boolean | fine$loanArgs<ExtArgs>
  }

  export type $finePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "fine"
    objects: {
      loan: Prisma.$loanPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      fine_id: number
      loan_id: number | null
      amount: Prisma.Decimal
    }, ExtArgs["result"]["fine"]>
    composites: {}
  }

  type fineGetPayload<S extends boolean | null | undefined | fineDefaultArgs> = $Result.GetResult<Prisma.$finePayload, S>

  type fineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<fineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FineCountAggregateInputType | true
    }

  export interface fineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['fine'], meta: { name: 'fine' } }
    /**
     * Find zero or one Fine that matches the filter.
     * @param {fineFindUniqueArgs} args - Arguments to find a Fine
     * @example
     * // Get one Fine
     * const fine = await prisma.fine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends fineFindUniqueArgs>(args: SelectSubset<T, fineFindUniqueArgs<ExtArgs>>): Prisma__fineClient<$Result.GetResult<Prisma.$finePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {fineFindUniqueOrThrowArgs} args - Arguments to find a Fine
     * @example
     * // Get one Fine
     * const fine = await prisma.fine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends fineFindUniqueOrThrowArgs>(args: SelectSubset<T, fineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__fineClient<$Result.GetResult<Prisma.$finePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fineFindFirstArgs} args - Arguments to find a Fine
     * @example
     * // Get one Fine
     * const fine = await prisma.fine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends fineFindFirstArgs>(args?: SelectSubset<T, fineFindFirstArgs<ExtArgs>>): Prisma__fineClient<$Result.GetResult<Prisma.$finePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fineFindFirstOrThrowArgs} args - Arguments to find a Fine
     * @example
     * // Get one Fine
     * const fine = await prisma.fine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends fineFindFirstOrThrowArgs>(args?: SelectSubset<T, fineFindFirstOrThrowArgs<ExtArgs>>): Prisma__fineClient<$Result.GetResult<Prisma.$finePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fines
     * const fines = await prisma.fine.findMany()
     * 
     * // Get first 10 Fines
     * const fines = await prisma.fine.findMany({ take: 10 })
     * 
     * // Only select the `fine_id`
     * const fineWithFine_idOnly = await prisma.fine.findMany({ select: { fine_id: true } })
     * 
     */
    findMany<T extends fineFindManyArgs>(args?: SelectSubset<T, fineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$finePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fine.
     * @param {fineCreateArgs} args - Arguments to create a Fine.
     * @example
     * // Create one Fine
     * const Fine = await prisma.fine.create({
     *   data: {
     *     // ... data to create a Fine
     *   }
     * })
     * 
     */
    create<T extends fineCreateArgs>(args: SelectSubset<T, fineCreateArgs<ExtArgs>>): Prisma__fineClient<$Result.GetResult<Prisma.$finePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fines.
     * @param {fineCreateManyArgs} args - Arguments to create many Fines.
     * @example
     * // Create many Fines
     * const fine = await prisma.fine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends fineCreateManyArgs>(args?: SelectSubset<T, fineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fines and returns the data saved in the database.
     * @param {fineCreateManyAndReturnArgs} args - Arguments to create many Fines.
     * @example
     * // Create many Fines
     * const fine = await prisma.fine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fines and only return the `fine_id`
     * const fineWithFine_idOnly = await prisma.fine.createManyAndReturn({
     *   select: { fine_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends fineCreateManyAndReturnArgs>(args?: SelectSubset<T, fineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$finePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fine.
     * @param {fineDeleteArgs} args - Arguments to delete one Fine.
     * @example
     * // Delete one Fine
     * const Fine = await prisma.fine.delete({
     *   where: {
     *     // ... filter to delete one Fine
     *   }
     * })
     * 
     */
    delete<T extends fineDeleteArgs>(args: SelectSubset<T, fineDeleteArgs<ExtArgs>>): Prisma__fineClient<$Result.GetResult<Prisma.$finePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fine.
     * @param {fineUpdateArgs} args - Arguments to update one Fine.
     * @example
     * // Update one Fine
     * const fine = await prisma.fine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends fineUpdateArgs>(args: SelectSubset<T, fineUpdateArgs<ExtArgs>>): Prisma__fineClient<$Result.GetResult<Prisma.$finePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fines.
     * @param {fineDeleteManyArgs} args - Arguments to filter Fines to delete.
     * @example
     * // Delete a few Fines
     * const { count } = await prisma.fine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends fineDeleteManyArgs>(args?: SelectSubset<T, fineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fines
     * const fine = await prisma.fine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends fineUpdateManyArgs>(args: SelectSubset<T, fineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fines and returns the data updated in the database.
     * @param {fineUpdateManyAndReturnArgs} args - Arguments to update many Fines.
     * @example
     * // Update many Fines
     * const fine = await prisma.fine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fines and only return the `fine_id`
     * const fineWithFine_idOnly = await prisma.fine.updateManyAndReturn({
     *   select: { fine_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends fineUpdateManyAndReturnArgs>(args: SelectSubset<T, fineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$finePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fine.
     * @param {fineUpsertArgs} args - Arguments to update or create a Fine.
     * @example
     * // Update or create a Fine
     * const fine = await prisma.fine.upsert({
     *   create: {
     *     // ... data to create a Fine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fine we want to update
     *   }
     * })
     */
    upsert<T extends fineUpsertArgs>(args: SelectSubset<T, fineUpsertArgs<ExtArgs>>): Prisma__fineClient<$Result.GetResult<Prisma.$finePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fineCountArgs} args - Arguments to filter Fines to count.
     * @example
     * // Count the number of Fines
     * const count = await prisma.fine.count({
     *   where: {
     *     // ... the filter for the Fines we want to count
     *   }
     * })
    **/
    count<T extends fineCountArgs>(
      args?: Subset<T, fineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FineAggregateArgs>(args: Subset<T, FineAggregateArgs>): Prisma.PrismaPromise<GetFineAggregateType<T>>

    /**
     * Group by Fine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends fineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: fineGroupByArgs['orderBy'] }
        : { orderBy?: fineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, fineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the fine model
   */
  readonly fields: fineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for fine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__fineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    loan<T extends fine$loanArgs<ExtArgs> = {}>(args?: Subset<T, fine$loanArgs<ExtArgs>>): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the fine model
   */
  interface fineFieldRefs {
    readonly fine_id: FieldRef<"fine", 'Int'>
    readonly loan_id: FieldRef<"fine", 'Int'>
    readonly amount: FieldRef<"fine", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * fine findUnique
   */
  export type fineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fine
     */
    select?: fineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fine
     */
    omit?: fineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fineInclude<ExtArgs> | null
    /**
     * Filter, which fine to fetch.
     */
    where: fineWhereUniqueInput
  }

  /**
   * fine findUniqueOrThrow
   */
  export type fineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fine
     */
    select?: fineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fine
     */
    omit?: fineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fineInclude<ExtArgs> | null
    /**
     * Filter, which fine to fetch.
     */
    where: fineWhereUniqueInput
  }

  /**
   * fine findFirst
   */
  export type fineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fine
     */
    select?: fineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fine
     */
    omit?: fineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fineInclude<ExtArgs> | null
    /**
     * Filter, which fine to fetch.
     */
    where?: fineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fines to fetch.
     */
    orderBy?: fineOrderByWithRelationInput | fineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fines.
     */
    cursor?: fineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fines.
     */
    distinct?: FineScalarFieldEnum | FineScalarFieldEnum[]
  }

  /**
   * fine findFirstOrThrow
   */
  export type fineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fine
     */
    select?: fineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fine
     */
    omit?: fineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fineInclude<ExtArgs> | null
    /**
     * Filter, which fine to fetch.
     */
    where?: fineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fines to fetch.
     */
    orderBy?: fineOrderByWithRelationInput | fineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fines.
     */
    cursor?: fineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fines.
     */
    distinct?: FineScalarFieldEnum | FineScalarFieldEnum[]
  }

  /**
   * fine findMany
   */
  export type fineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fine
     */
    select?: fineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fine
     */
    omit?: fineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fineInclude<ExtArgs> | null
    /**
     * Filter, which fines to fetch.
     */
    where?: fineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fines to fetch.
     */
    orderBy?: fineOrderByWithRelationInput | fineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing fines.
     */
    cursor?: fineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fines.
     */
    skip?: number
    distinct?: FineScalarFieldEnum | FineScalarFieldEnum[]
  }

  /**
   * fine create
   */
  export type fineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fine
     */
    select?: fineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fine
     */
    omit?: fineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fineInclude<ExtArgs> | null
    /**
     * The data needed to create a fine.
     */
    data: XOR<fineCreateInput, fineUncheckedCreateInput>
  }

  /**
   * fine createMany
   */
  export type fineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many fines.
     */
    data: fineCreateManyInput | fineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * fine createManyAndReturn
   */
  export type fineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fine
     */
    select?: fineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the fine
     */
    omit?: fineOmit<ExtArgs> | null
    /**
     * The data used to create many fines.
     */
    data: fineCreateManyInput | fineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * fine update
   */
  export type fineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fine
     */
    select?: fineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fine
     */
    omit?: fineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fineInclude<ExtArgs> | null
    /**
     * The data needed to update a fine.
     */
    data: XOR<fineUpdateInput, fineUncheckedUpdateInput>
    /**
     * Choose, which fine to update.
     */
    where: fineWhereUniqueInput
  }

  /**
   * fine updateMany
   */
  export type fineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update fines.
     */
    data: XOR<fineUpdateManyMutationInput, fineUncheckedUpdateManyInput>
    /**
     * Filter which fines to update
     */
    where?: fineWhereInput
    /**
     * Limit how many fines to update.
     */
    limit?: number
  }

  /**
   * fine updateManyAndReturn
   */
  export type fineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fine
     */
    select?: fineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the fine
     */
    omit?: fineOmit<ExtArgs> | null
    /**
     * The data used to update fines.
     */
    data: XOR<fineUpdateManyMutationInput, fineUncheckedUpdateManyInput>
    /**
     * Filter which fines to update
     */
    where?: fineWhereInput
    /**
     * Limit how many fines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * fine upsert
   */
  export type fineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fine
     */
    select?: fineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fine
     */
    omit?: fineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fineInclude<ExtArgs> | null
    /**
     * The filter to search for the fine to update in case it exists.
     */
    where: fineWhereUniqueInput
    /**
     * In case the fine found by the `where` argument doesn't exist, create a new fine with this data.
     */
    create: XOR<fineCreateInput, fineUncheckedCreateInput>
    /**
     * In case the fine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<fineUpdateInput, fineUncheckedUpdateInput>
  }

  /**
   * fine delete
   */
  export type fineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fine
     */
    select?: fineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fine
     */
    omit?: fineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fineInclude<ExtArgs> | null
    /**
     * Filter which fine to delete.
     */
    where: fineWhereUniqueInput
  }

  /**
   * fine deleteMany
   */
  export type fineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fines to delete
     */
    where?: fineWhereInput
    /**
     * Limit how many fines to delete.
     */
    limit?: number
  }

  /**
   * fine.loan
   */
  export type fine$loanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan
     */
    omit?: loanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loanInclude<ExtArgs> | null
    where?: loanWhereInput
  }

  /**
   * fine without action
   */
  export type fineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fine
     */
    select?: fineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fine
     */
    omit?: fineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fineInclude<ExtArgs> | null
  }


  /**
   * Model loan
   */

  export type AggregateLoan = {
    _count: LoanCountAggregateOutputType | null
    _avg: LoanAvgAggregateOutputType | null
    _sum: LoanSumAggregateOutputType | null
    _min: LoanMinAggregateOutputType | null
    _max: LoanMaxAggregateOutputType | null
  }

  export type LoanAvgAggregateOutputType = {
    loan_id: number | null
    copy_id: number | null
    member_id: number | null
  }

  export type LoanSumAggregateOutputType = {
    loan_id: number | null
    copy_id: number | null
    member_id: number | null
  }

  export type LoanMinAggregateOutputType = {
    loan_id: number | null
    copy_id: number | null
    member_id: number | null
    loan_date: Date | null
    due_date: Date | null
    return_date: Date | null
  }

  export type LoanMaxAggregateOutputType = {
    loan_id: number | null
    copy_id: number | null
    member_id: number | null
    loan_date: Date | null
    due_date: Date | null
    return_date: Date | null
  }

  export type LoanCountAggregateOutputType = {
    loan_id: number
    copy_id: number
    member_id: number
    loan_date: number
    due_date: number
    return_date: number
    _all: number
  }


  export type LoanAvgAggregateInputType = {
    loan_id?: true
    copy_id?: true
    member_id?: true
  }

  export type LoanSumAggregateInputType = {
    loan_id?: true
    copy_id?: true
    member_id?: true
  }

  export type LoanMinAggregateInputType = {
    loan_id?: true
    copy_id?: true
    member_id?: true
    loan_date?: true
    due_date?: true
    return_date?: true
  }

  export type LoanMaxAggregateInputType = {
    loan_id?: true
    copy_id?: true
    member_id?: true
    loan_date?: true
    due_date?: true
    return_date?: true
  }

  export type LoanCountAggregateInputType = {
    loan_id?: true
    copy_id?: true
    member_id?: true
    loan_date?: true
    due_date?: true
    return_date?: true
    _all?: true
  }

  export type LoanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which loan to aggregate.
     */
    where?: loanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loans to fetch.
     */
    orderBy?: loanOrderByWithRelationInput | loanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: loanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned loans
    **/
    _count?: true | LoanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LoanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LoanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoanMaxAggregateInputType
  }

  export type GetLoanAggregateType<T extends LoanAggregateArgs> = {
        [P in keyof T & keyof AggregateLoan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoan[P]>
      : GetScalarType<T[P], AggregateLoan[P]>
  }




  export type loanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: loanWhereInput
    orderBy?: loanOrderByWithAggregationInput | loanOrderByWithAggregationInput[]
    by: LoanScalarFieldEnum[] | LoanScalarFieldEnum
    having?: loanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoanCountAggregateInputType | true
    _avg?: LoanAvgAggregateInputType
    _sum?: LoanSumAggregateInputType
    _min?: LoanMinAggregateInputType
    _max?: LoanMaxAggregateInputType
  }

  export type LoanGroupByOutputType = {
    loan_id: number
    copy_id: number | null
    member_id: number | null
    loan_date: Date
    due_date: Date | null
    return_date: Date | null
    _count: LoanCountAggregateOutputType | null
    _avg: LoanAvgAggregateOutputType | null
    _sum: LoanSumAggregateOutputType | null
    _min: LoanMinAggregateOutputType | null
    _max: LoanMaxAggregateOutputType | null
  }

  type GetLoanGroupByPayload<T extends loanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoanGroupByOutputType[P]>
            : GetScalarType<T[P], LoanGroupByOutputType[P]>
        }
      >
    >


  export type loanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    loan_id?: boolean
    copy_id?: boolean
    member_id?: boolean
    loan_date?: boolean
    due_date?: boolean
    return_date?: boolean
    fine?: boolean | loan$fineArgs<ExtArgs>
    copy?: boolean | loan$copyArgs<ExtArgs>
    member?: boolean | loan$memberArgs<ExtArgs>
    _count?: boolean | LoanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loan"]>

  export type loanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    loan_id?: boolean
    copy_id?: boolean
    member_id?: boolean
    loan_date?: boolean
    due_date?: boolean
    return_date?: boolean
    copy?: boolean | loan$copyArgs<ExtArgs>
    member?: boolean | loan$memberArgs<ExtArgs>
  }, ExtArgs["result"]["loan"]>

  export type loanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    loan_id?: boolean
    copy_id?: boolean
    member_id?: boolean
    loan_date?: boolean
    due_date?: boolean
    return_date?: boolean
    copy?: boolean | loan$copyArgs<ExtArgs>
    member?: boolean | loan$memberArgs<ExtArgs>
  }, ExtArgs["result"]["loan"]>

  export type loanSelectScalar = {
    loan_id?: boolean
    copy_id?: boolean
    member_id?: boolean
    loan_date?: boolean
    due_date?: boolean
    return_date?: boolean
  }

  export type loanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"loan_id" | "copy_id" | "member_id" | "loan_date" | "due_date" | "return_date", ExtArgs["result"]["loan"]>
  export type loanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fine?: boolean | loan$fineArgs<ExtArgs>
    copy?: boolean | loan$copyArgs<ExtArgs>
    member?: boolean | loan$memberArgs<ExtArgs>
    _count?: boolean | LoanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type loanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    copy?: boolean | loan$copyArgs<ExtArgs>
    member?: boolean | loan$memberArgs<ExtArgs>
  }
  export type loanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    copy?: boolean | loan$copyArgs<ExtArgs>
    member?: boolean | loan$memberArgs<ExtArgs>
  }

  export type $loanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "loan"
    objects: {
      fine: Prisma.$finePayload<ExtArgs>[]
      copy: Prisma.$copyPayload<ExtArgs> | null
      member: Prisma.$memberPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      loan_id: number
      copy_id: number | null
      member_id: number | null
      loan_date: Date
      due_date: Date | null
      return_date: Date | null
    }, ExtArgs["result"]["loan"]>
    composites: {}
  }

  type loanGetPayload<S extends boolean | null | undefined | loanDefaultArgs> = $Result.GetResult<Prisma.$loanPayload, S>

  type loanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<loanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoanCountAggregateInputType | true
    }

  export interface loanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['loan'], meta: { name: 'loan' } }
    /**
     * Find zero or one Loan that matches the filter.
     * @param {loanFindUniqueArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends loanFindUniqueArgs>(args: SelectSubset<T, loanFindUniqueArgs<ExtArgs>>): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Loan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {loanFindUniqueOrThrowArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends loanFindUniqueOrThrowArgs>(args: SelectSubset<T, loanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Loan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loanFindFirstArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends loanFindFirstArgs>(args?: SelectSubset<T, loanFindFirstArgs<ExtArgs>>): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Loan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loanFindFirstOrThrowArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends loanFindFirstOrThrowArgs>(args?: SelectSubset<T, loanFindFirstOrThrowArgs<ExtArgs>>): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Loans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Loans
     * const loans = await prisma.loan.findMany()
     * 
     * // Get first 10 Loans
     * const loans = await prisma.loan.findMany({ take: 10 })
     * 
     * // Only select the `loan_id`
     * const loanWithLoan_idOnly = await prisma.loan.findMany({ select: { loan_id: true } })
     * 
     */
    findMany<T extends loanFindManyArgs>(args?: SelectSubset<T, loanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Loan.
     * @param {loanCreateArgs} args - Arguments to create a Loan.
     * @example
     * // Create one Loan
     * const Loan = await prisma.loan.create({
     *   data: {
     *     // ... data to create a Loan
     *   }
     * })
     * 
     */
    create<T extends loanCreateArgs>(args: SelectSubset<T, loanCreateArgs<ExtArgs>>): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Loans.
     * @param {loanCreateManyArgs} args - Arguments to create many Loans.
     * @example
     * // Create many Loans
     * const loan = await prisma.loan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends loanCreateManyArgs>(args?: SelectSubset<T, loanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Loans and returns the data saved in the database.
     * @param {loanCreateManyAndReturnArgs} args - Arguments to create many Loans.
     * @example
     * // Create many Loans
     * const loan = await prisma.loan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Loans and only return the `loan_id`
     * const loanWithLoan_idOnly = await prisma.loan.createManyAndReturn({
     *   select: { loan_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends loanCreateManyAndReturnArgs>(args?: SelectSubset<T, loanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Loan.
     * @param {loanDeleteArgs} args - Arguments to delete one Loan.
     * @example
     * // Delete one Loan
     * const Loan = await prisma.loan.delete({
     *   where: {
     *     // ... filter to delete one Loan
     *   }
     * })
     * 
     */
    delete<T extends loanDeleteArgs>(args: SelectSubset<T, loanDeleteArgs<ExtArgs>>): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Loan.
     * @param {loanUpdateArgs} args - Arguments to update one Loan.
     * @example
     * // Update one Loan
     * const loan = await prisma.loan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends loanUpdateArgs>(args: SelectSubset<T, loanUpdateArgs<ExtArgs>>): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Loans.
     * @param {loanDeleteManyArgs} args - Arguments to filter Loans to delete.
     * @example
     * // Delete a few Loans
     * const { count } = await prisma.loan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends loanDeleteManyArgs>(args?: SelectSubset<T, loanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Loans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Loans
     * const loan = await prisma.loan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends loanUpdateManyArgs>(args: SelectSubset<T, loanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Loans and returns the data updated in the database.
     * @param {loanUpdateManyAndReturnArgs} args - Arguments to update many Loans.
     * @example
     * // Update many Loans
     * const loan = await prisma.loan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Loans and only return the `loan_id`
     * const loanWithLoan_idOnly = await prisma.loan.updateManyAndReturn({
     *   select: { loan_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends loanUpdateManyAndReturnArgs>(args: SelectSubset<T, loanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Loan.
     * @param {loanUpsertArgs} args - Arguments to update or create a Loan.
     * @example
     * // Update or create a Loan
     * const loan = await prisma.loan.upsert({
     *   create: {
     *     // ... data to create a Loan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Loan we want to update
     *   }
     * })
     */
    upsert<T extends loanUpsertArgs>(args: SelectSubset<T, loanUpsertArgs<ExtArgs>>): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Loans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loanCountArgs} args - Arguments to filter Loans to count.
     * @example
     * // Count the number of Loans
     * const count = await prisma.loan.count({
     *   where: {
     *     // ... the filter for the Loans we want to count
     *   }
     * })
    **/
    count<T extends loanCountArgs>(
      args?: Subset<T, loanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Loan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LoanAggregateArgs>(args: Subset<T, LoanAggregateArgs>): Prisma.PrismaPromise<GetLoanAggregateType<T>>

    /**
     * Group by Loan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends loanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: loanGroupByArgs['orderBy'] }
        : { orderBy?: loanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, loanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the loan model
   */
  readonly fields: loanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for loan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__loanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fine<T extends loan$fineArgs<ExtArgs> = {}>(args?: Subset<T, loan$fineArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$finePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    copy<T extends loan$copyArgs<ExtArgs> = {}>(args?: Subset<T, loan$copyArgs<ExtArgs>>): Prisma__copyClient<$Result.GetResult<Prisma.$copyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    member<T extends loan$memberArgs<ExtArgs> = {}>(args?: Subset<T, loan$memberArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the loan model
   */
  interface loanFieldRefs {
    readonly loan_id: FieldRef<"loan", 'Int'>
    readonly copy_id: FieldRef<"loan", 'Int'>
    readonly member_id: FieldRef<"loan", 'Int'>
    readonly loan_date: FieldRef<"loan", 'DateTime'>
    readonly due_date: FieldRef<"loan", 'DateTime'>
    readonly return_date: FieldRef<"loan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * loan findUnique
   */
  export type loanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan
     */
    omit?: loanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loanInclude<ExtArgs> | null
    /**
     * Filter, which loan to fetch.
     */
    where: loanWhereUniqueInput
  }

  /**
   * loan findUniqueOrThrow
   */
  export type loanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan
     */
    omit?: loanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loanInclude<ExtArgs> | null
    /**
     * Filter, which loan to fetch.
     */
    where: loanWhereUniqueInput
  }

  /**
   * loan findFirst
   */
  export type loanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan
     */
    omit?: loanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loanInclude<ExtArgs> | null
    /**
     * Filter, which loan to fetch.
     */
    where?: loanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loans to fetch.
     */
    orderBy?: loanOrderByWithRelationInput | loanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for loans.
     */
    cursor?: loanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of loans.
     */
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[]
  }

  /**
   * loan findFirstOrThrow
   */
  export type loanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan
     */
    omit?: loanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loanInclude<ExtArgs> | null
    /**
     * Filter, which loan to fetch.
     */
    where?: loanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loans to fetch.
     */
    orderBy?: loanOrderByWithRelationInput | loanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for loans.
     */
    cursor?: loanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of loans.
     */
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[]
  }

  /**
   * loan findMany
   */
  export type loanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan
     */
    omit?: loanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loanInclude<ExtArgs> | null
    /**
     * Filter, which loans to fetch.
     */
    where?: loanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loans to fetch.
     */
    orderBy?: loanOrderByWithRelationInput | loanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing loans.
     */
    cursor?: loanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loans.
     */
    skip?: number
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[]
  }

  /**
   * loan create
   */
  export type loanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan
     */
    omit?: loanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loanInclude<ExtArgs> | null
    /**
     * The data needed to create a loan.
     */
    data: XOR<loanCreateInput, loanUncheckedCreateInput>
  }

  /**
   * loan createMany
   */
  export type loanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many loans.
     */
    data: loanCreateManyInput | loanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * loan createManyAndReturn
   */
  export type loanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the loan
     */
    omit?: loanOmit<ExtArgs> | null
    /**
     * The data used to create many loans.
     */
    data: loanCreateManyInput | loanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * loan update
   */
  export type loanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan
     */
    omit?: loanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loanInclude<ExtArgs> | null
    /**
     * The data needed to update a loan.
     */
    data: XOR<loanUpdateInput, loanUncheckedUpdateInput>
    /**
     * Choose, which loan to update.
     */
    where: loanWhereUniqueInput
  }

  /**
   * loan updateMany
   */
  export type loanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update loans.
     */
    data: XOR<loanUpdateManyMutationInput, loanUncheckedUpdateManyInput>
    /**
     * Filter which loans to update
     */
    where?: loanWhereInput
    /**
     * Limit how many loans to update.
     */
    limit?: number
  }

  /**
   * loan updateManyAndReturn
   */
  export type loanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the loan
     */
    omit?: loanOmit<ExtArgs> | null
    /**
     * The data used to update loans.
     */
    data: XOR<loanUpdateManyMutationInput, loanUncheckedUpdateManyInput>
    /**
     * Filter which loans to update
     */
    where?: loanWhereInput
    /**
     * Limit how many loans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * loan upsert
   */
  export type loanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan
     */
    omit?: loanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loanInclude<ExtArgs> | null
    /**
     * The filter to search for the loan to update in case it exists.
     */
    where: loanWhereUniqueInput
    /**
     * In case the loan found by the `where` argument doesn't exist, create a new loan with this data.
     */
    create: XOR<loanCreateInput, loanUncheckedCreateInput>
    /**
     * In case the loan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<loanUpdateInput, loanUncheckedUpdateInput>
  }

  /**
   * loan delete
   */
  export type loanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan
     */
    omit?: loanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loanInclude<ExtArgs> | null
    /**
     * Filter which loan to delete.
     */
    where: loanWhereUniqueInput
  }

  /**
   * loan deleteMany
   */
  export type loanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which loans to delete
     */
    where?: loanWhereInput
    /**
     * Limit how many loans to delete.
     */
    limit?: number
  }

  /**
   * loan.fine
   */
  export type loan$fineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fine
     */
    select?: fineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fine
     */
    omit?: fineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fineInclude<ExtArgs> | null
    where?: fineWhereInput
    orderBy?: fineOrderByWithRelationInput | fineOrderByWithRelationInput[]
    cursor?: fineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FineScalarFieldEnum | FineScalarFieldEnum[]
  }

  /**
   * loan.copy
   */
  export type loan$copyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the copy
     */
    select?: copySelect<ExtArgs> | null
    /**
     * Omit specific fields from the copy
     */
    omit?: copyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: copyInclude<ExtArgs> | null
    where?: copyWhereInput
  }

  /**
   * loan.member
   */
  export type loan$memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    where?: memberWhereInput
  }

  /**
   * loan without action
   */
  export type loanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan
     */
    omit?: loanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loanInclude<ExtArgs> | null
  }


  /**
   * Model member
   */

  export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null
    _avg: MemberAvgAggregateOutputType | null
    _sum: MemberSumAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  export type MemberAvgAggregateOutputType = {
    member_id: number | null
  }

  export type MemberSumAggregateOutputType = {
    member_id: number | null
  }

  export type MemberMinAggregateOutputType = {
    member_id: number | null
    full_name: string | null
    email: string | null
    phone: string | null
    address: string | null
    member_type: string | null
    join_date: Date | null
  }

  export type MemberMaxAggregateOutputType = {
    member_id: number | null
    full_name: string | null
    email: string | null
    phone: string | null
    address: string | null
    member_type: string | null
    join_date: Date | null
  }

  export type MemberCountAggregateOutputType = {
    member_id: number
    full_name: number
    email: number
    phone: number
    address: number
    member_type: number
    join_date: number
    _all: number
  }


  export type MemberAvgAggregateInputType = {
    member_id?: true
  }

  export type MemberSumAggregateInputType = {
    member_id?: true
  }

  export type MemberMinAggregateInputType = {
    member_id?: true
    full_name?: true
    email?: true
    phone?: true
    address?: true
    member_type?: true
    join_date?: true
  }

  export type MemberMaxAggregateInputType = {
    member_id?: true
    full_name?: true
    email?: true
    phone?: true
    address?: true
    member_type?: true
    join_date?: true
  }

  export type MemberCountAggregateInputType = {
    member_id?: true
    full_name?: true
    email?: true
    phone?: true
    address?: true
    member_type?: true
    join_date?: true
    _all?: true
  }

  export type MemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which member to aggregate.
     */
    where?: memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: memberOrderByWithRelationInput | memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned members
    **/
    _count?: true | MemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberMaxAggregateInputType
  }

  export type GetMemberAggregateType<T extends MemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember[P]>
      : GetScalarType<T[P], AggregateMember[P]>
  }




  export type memberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: memberWhereInput
    orderBy?: memberOrderByWithAggregationInput | memberOrderByWithAggregationInput[]
    by: MemberScalarFieldEnum[] | MemberScalarFieldEnum
    having?: memberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberCountAggregateInputType | true
    _avg?: MemberAvgAggregateInputType
    _sum?: MemberSumAggregateInputType
    _min?: MemberMinAggregateInputType
    _max?: MemberMaxAggregateInputType
  }

  export type MemberGroupByOutputType = {
    member_id: number
    full_name: string
    email: string
    phone: string | null
    address: string | null
    member_type: string | null
    join_date: Date | null
    _count: MemberCountAggregateOutputType | null
    _avg: MemberAvgAggregateOutputType | null
    _sum: MemberSumAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  type GetMemberGroupByPayload<T extends memberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberGroupByOutputType[P]>
            : GetScalarType<T[P], MemberGroupByOutputType[P]>
        }
      >
    >


  export type memberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    member_id?: boolean
    full_name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    member_type?: boolean
    join_date?: boolean
    loan?: boolean | member$loanArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type memberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    member_id?: boolean
    full_name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    member_type?: boolean
    join_date?: boolean
  }, ExtArgs["result"]["member"]>

  export type memberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    member_id?: boolean
    full_name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    member_type?: boolean
    join_date?: boolean
  }, ExtArgs["result"]["member"]>

  export type memberSelectScalar = {
    member_id?: boolean
    full_name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    member_type?: boolean
    join_date?: boolean
  }

  export type memberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"member_id" | "full_name" | "email" | "phone" | "address" | "member_type" | "join_date", ExtArgs["result"]["member"]>
  export type memberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loan?: boolean | member$loanArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type memberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type memberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $memberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "member"
    objects: {
      loan: Prisma.$loanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      member_id: number
      full_name: string
      email: string
      phone: string | null
      address: string | null
      member_type: string | null
      join_date: Date | null
    }, ExtArgs["result"]["member"]>
    composites: {}
  }

  type memberGetPayload<S extends boolean | null | undefined | memberDefaultArgs> = $Result.GetResult<Prisma.$memberPayload, S>

  type memberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<memberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberCountAggregateInputType | true
    }

  export interface memberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['member'], meta: { name: 'member' } }
    /**
     * Find zero or one Member that matches the filter.
     * @param {memberFindUniqueArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends memberFindUniqueArgs>(args: SelectSubset<T, memberFindUniqueArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Member that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {memberFindUniqueOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends memberFindUniqueOrThrowArgs>(args: SelectSubset<T, memberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberFindFirstArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends memberFindFirstArgs>(args?: SelectSubset<T, memberFindFirstArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberFindFirstOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends memberFindFirstOrThrowArgs>(args?: SelectSubset<T, memberFindFirstOrThrowArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.member.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.member.findMany({ take: 10 })
     * 
     * // Only select the `member_id`
     * const memberWithMember_idOnly = await prisma.member.findMany({ select: { member_id: true } })
     * 
     */
    findMany<T extends memberFindManyArgs>(args?: SelectSubset<T, memberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Member.
     * @param {memberCreateArgs} args - Arguments to create a Member.
     * @example
     * // Create one Member
     * const Member = await prisma.member.create({
     *   data: {
     *     // ... data to create a Member
     *   }
     * })
     * 
     */
    create<T extends memberCreateArgs>(args: SelectSubset<T, memberCreateArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Members.
     * @param {memberCreateManyArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends memberCreateManyArgs>(args?: SelectSubset<T, memberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Members and returns the data saved in the database.
     * @param {memberCreateManyAndReturnArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Members and only return the `member_id`
     * const memberWithMember_idOnly = await prisma.member.createManyAndReturn({
     *   select: { member_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends memberCreateManyAndReturnArgs>(args?: SelectSubset<T, memberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Member.
     * @param {memberDeleteArgs} args - Arguments to delete one Member.
     * @example
     * // Delete one Member
     * const Member = await prisma.member.delete({
     *   where: {
     *     // ... filter to delete one Member
     *   }
     * })
     * 
     */
    delete<T extends memberDeleteArgs>(args: SelectSubset<T, memberDeleteArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Member.
     * @param {memberUpdateArgs} args - Arguments to update one Member.
     * @example
     * // Update one Member
     * const member = await prisma.member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends memberUpdateArgs>(args: SelectSubset<T, memberUpdateArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Members.
     * @param {memberDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends memberDeleteManyArgs>(args?: SelectSubset<T, memberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends memberUpdateManyArgs>(args: SelectSubset<T, memberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members and returns the data updated in the database.
     * @param {memberUpdateManyAndReturnArgs} args - Arguments to update many Members.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Members and only return the `member_id`
     * const memberWithMember_idOnly = await prisma.member.updateManyAndReturn({
     *   select: { member_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends memberUpdateManyAndReturnArgs>(args: SelectSubset<T, memberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Member.
     * @param {memberUpsertArgs} args - Arguments to update or create a Member.
     * @example
     * // Update or create a Member
     * const member = await prisma.member.upsert({
     *   create: {
     *     // ... data to create a Member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member we want to update
     *   }
     * })
     */
    upsert<T extends memberUpsertArgs>(args: SelectSubset<T, memberUpsertArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.member.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends memberCountArgs>(
      args?: Subset<T, memberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MemberAggregateArgs>(args: Subset<T, MemberAggregateArgs>): Prisma.PrismaPromise<GetMemberAggregateType<T>>

    /**
     * Group by Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends memberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: memberGroupByArgs['orderBy'] }
        : { orderBy?: memberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, memberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the member model
   */
  readonly fields: memberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__memberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    loan<T extends member$loanArgs<ExtArgs> = {}>(args?: Subset<T, member$loanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the member model
   */
  interface memberFieldRefs {
    readonly member_id: FieldRef<"member", 'Int'>
    readonly full_name: FieldRef<"member", 'String'>
    readonly email: FieldRef<"member", 'String'>
    readonly phone: FieldRef<"member", 'String'>
    readonly address: FieldRef<"member", 'String'>
    readonly member_type: FieldRef<"member", 'String'>
    readonly join_date: FieldRef<"member", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * member findUnique
   */
  export type memberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * Filter, which member to fetch.
     */
    where: memberWhereUniqueInput
  }

  /**
   * member findUniqueOrThrow
   */
  export type memberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * Filter, which member to fetch.
     */
    where: memberWhereUniqueInput
  }

  /**
   * member findFirst
   */
  export type memberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * Filter, which member to fetch.
     */
    where?: memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: memberOrderByWithRelationInput | memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for members.
     */
    cursor?: memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * member findFirstOrThrow
   */
  export type memberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * Filter, which member to fetch.
     */
    where?: memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: memberOrderByWithRelationInput | memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for members.
     */
    cursor?: memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * member findMany
   */
  export type memberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * Filter, which members to fetch.
     */
    where?: memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: memberOrderByWithRelationInput | memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing members.
     */
    cursor?: memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * member create
   */
  export type memberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * The data needed to create a member.
     */
    data: XOR<memberCreateInput, memberUncheckedCreateInput>
  }

  /**
   * member createMany
   */
  export type memberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many members.
     */
    data: memberCreateManyInput | memberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * member createManyAndReturn
   */
  export type memberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * The data used to create many members.
     */
    data: memberCreateManyInput | memberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * member update
   */
  export type memberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * The data needed to update a member.
     */
    data: XOR<memberUpdateInput, memberUncheckedUpdateInput>
    /**
     * Choose, which member to update.
     */
    where: memberWhereUniqueInput
  }

  /**
   * member updateMany
   */
  export type memberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update members.
     */
    data: XOR<memberUpdateManyMutationInput, memberUncheckedUpdateManyInput>
    /**
     * Filter which members to update
     */
    where?: memberWhereInput
    /**
     * Limit how many members to update.
     */
    limit?: number
  }

  /**
   * member updateManyAndReturn
   */
  export type memberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * The data used to update members.
     */
    data: XOR<memberUpdateManyMutationInput, memberUncheckedUpdateManyInput>
    /**
     * Filter which members to update
     */
    where?: memberWhereInput
    /**
     * Limit how many members to update.
     */
    limit?: number
  }

  /**
   * member upsert
   */
  export type memberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * The filter to search for the member to update in case it exists.
     */
    where: memberWhereUniqueInput
    /**
     * In case the member found by the `where` argument doesn't exist, create a new member with this data.
     */
    create: XOR<memberCreateInput, memberUncheckedCreateInput>
    /**
     * In case the member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<memberUpdateInput, memberUncheckedUpdateInput>
  }

  /**
   * member delete
   */
  export type memberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * Filter which member to delete.
     */
    where: memberWhereUniqueInput
  }

  /**
   * member deleteMany
   */
  export type memberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which members to delete
     */
    where?: memberWhereInput
    /**
     * Limit how many members to delete.
     */
    limit?: number
  }

  /**
   * member.loan
   */
  export type member$loanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan
     */
    omit?: loanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loanInclude<ExtArgs> | null
    where?: loanWhereInput
    orderBy?: loanOrderByWithRelationInput | loanOrderByWithRelationInput[]
    cursor?: loanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[]
  }

  /**
   * member without action
   */
  export type memberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
  }


  /**
   * Model publisher
   */

  export type AggregatePublisher = {
    _count: PublisherCountAggregateOutputType | null
    _avg: PublisherAvgAggregateOutputType | null
    _sum: PublisherSumAggregateOutputType | null
    _min: PublisherMinAggregateOutputType | null
    _max: PublisherMaxAggregateOutputType | null
  }

  export type PublisherAvgAggregateOutputType = {
    publisher_id: number | null
  }

  export type PublisherSumAggregateOutputType = {
    publisher_id: number | null
  }

  export type PublisherMinAggregateOutputType = {
    publisher_id: number | null
    name_and_surname: string | null
    address: string | null
    phone: string | null
  }

  export type PublisherMaxAggregateOutputType = {
    publisher_id: number | null
    name_and_surname: string | null
    address: string | null
    phone: string | null
  }

  export type PublisherCountAggregateOutputType = {
    publisher_id: number
    name_and_surname: number
    address: number
    phone: number
    _all: number
  }


  export type PublisherAvgAggregateInputType = {
    publisher_id?: true
  }

  export type PublisherSumAggregateInputType = {
    publisher_id?: true
  }

  export type PublisherMinAggregateInputType = {
    publisher_id?: true
    name_and_surname?: true
    address?: true
    phone?: true
  }

  export type PublisherMaxAggregateInputType = {
    publisher_id?: true
    name_and_surname?: true
    address?: true
    phone?: true
  }

  export type PublisherCountAggregateInputType = {
    publisher_id?: true
    name_and_surname?: true
    address?: true
    phone?: true
    _all?: true
  }

  export type PublisherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which publisher to aggregate.
     */
    where?: publisherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of publishers to fetch.
     */
    orderBy?: publisherOrderByWithRelationInput | publisherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: publisherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` publishers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` publishers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned publishers
    **/
    _count?: true | PublisherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PublisherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PublisherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublisherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublisherMaxAggregateInputType
  }

  export type GetPublisherAggregateType<T extends PublisherAggregateArgs> = {
        [P in keyof T & keyof AggregatePublisher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublisher[P]>
      : GetScalarType<T[P], AggregatePublisher[P]>
  }




  export type publisherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: publisherWhereInput
    orderBy?: publisherOrderByWithAggregationInput | publisherOrderByWithAggregationInput[]
    by: PublisherScalarFieldEnum[] | PublisherScalarFieldEnum
    having?: publisherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublisherCountAggregateInputType | true
    _avg?: PublisherAvgAggregateInputType
    _sum?: PublisherSumAggregateInputType
    _min?: PublisherMinAggregateInputType
    _max?: PublisherMaxAggregateInputType
  }

  export type PublisherGroupByOutputType = {
    publisher_id: number
    name_and_surname: string
    address: string | null
    phone: string | null
    _count: PublisherCountAggregateOutputType | null
    _avg: PublisherAvgAggregateOutputType | null
    _sum: PublisherSumAggregateOutputType | null
    _min: PublisherMinAggregateOutputType | null
    _max: PublisherMaxAggregateOutputType | null
  }

  type GetPublisherGroupByPayload<T extends publisherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublisherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublisherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublisherGroupByOutputType[P]>
            : GetScalarType<T[P], PublisherGroupByOutputType[P]>
        }
      >
    >


  export type publisherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    publisher_id?: boolean
    name_and_surname?: boolean
    address?: boolean
    phone?: boolean
    book?: boolean | publisher$bookArgs<ExtArgs>
    _count?: boolean | PublisherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publisher"]>

  export type publisherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    publisher_id?: boolean
    name_and_surname?: boolean
    address?: boolean
    phone?: boolean
  }, ExtArgs["result"]["publisher"]>

  export type publisherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    publisher_id?: boolean
    name_and_surname?: boolean
    address?: boolean
    phone?: boolean
  }, ExtArgs["result"]["publisher"]>

  export type publisherSelectScalar = {
    publisher_id?: boolean
    name_and_surname?: boolean
    address?: boolean
    phone?: boolean
  }

  export type publisherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"publisher_id" | "name_and_surname" | "address" | "phone", ExtArgs["result"]["publisher"]>
  export type publisherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | publisher$bookArgs<ExtArgs>
    _count?: boolean | PublisherCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type publisherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type publisherIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $publisherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "publisher"
    objects: {
      book: Prisma.$bookPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      publisher_id: number
      name_and_surname: string
      address: string | null
      phone: string | null
    }, ExtArgs["result"]["publisher"]>
    composites: {}
  }

  type publisherGetPayload<S extends boolean | null | undefined | publisherDefaultArgs> = $Result.GetResult<Prisma.$publisherPayload, S>

  type publisherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<publisherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PublisherCountAggregateInputType | true
    }

  export interface publisherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['publisher'], meta: { name: 'publisher' } }
    /**
     * Find zero or one Publisher that matches the filter.
     * @param {publisherFindUniqueArgs} args - Arguments to find a Publisher
     * @example
     * // Get one Publisher
     * const publisher = await prisma.publisher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends publisherFindUniqueArgs>(args: SelectSubset<T, publisherFindUniqueArgs<ExtArgs>>): Prisma__publisherClient<$Result.GetResult<Prisma.$publisherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Publisher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {publisherFindUniqueOrThrowArgs} args - Arguments to find a Publisher
     * @example
     * // Get one Publisher
     * const publisher = await prisma.publisher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends publisherFindUniqueOrThrowArgs>(args: SelectSubset<T, publisherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__publisherClient<$Result.GetResult<Prisma.$publisherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Publisher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publisherFindFirstArgs} args - Arguments to find a Publisher
     * @example
     * // Get one Publisher
     * const publisher = await prisma.publisher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends publisherFindFirstArgs>(args?: SelectSubset<T, publisherFindFirstArgs<ExtArgs>>): Prisma__publisherClient<$Result.GetResult<Prisma.$publisherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Publisher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publisherFindFirstOrThrowArgs} args - Arguments to find a Publisher
     * @example
     * // Get one Publisher
     * const publisher = await prisma.publisher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends publisherFindFirstOrThrowArgs>(args?: SelectSubset<T, publisherFindFirstOrThrowArgs<ExtArgs>>): Prisma__publisherClient<$Result.GetResult<Prisma.$publisherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Publishers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publisherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Publishers
     * const publishers = await prisma.publisher.findMany()
     * 
     * // Get first 10 Publishers
     * const publishers = await prisma.publisher.findMany({ take: 10 })
     * 
     * // Only select the `publisher_id`
     * const publisherWithPublisher_idOnly = await prisma.publisher.findMany({ select: { publisher_id: true } })
     * 
     */
    findMany<T extends publisherFindManyArgs>(args?: SelectSubset<T, publisherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$publisherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Publisher.
     * @param {publisherCreateArgs} args - Arguments to create a Publisher.
     * @example
     * // Create one Publisher
     * const Publisher = await prisma.publisher.create({
     *   data: {
     *     // ... data to create a Publisher
     *   }
     * })
     * 
     */
    create<T extends publisherCreateArgs>(args: SelectSubset<T, publisherCreateArgs<ExtArgs>>): Prisma__publisherClient<$Result.GetResult<Prisma.$publisherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Publishers.
     * @param {publisherCreateManyArgs} args - Arguments to create many Publishers.
     * @example
     * // Create many Publishers
     * const publisher = await prisma.publisher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends publisherCreateManyArgs>(args?: SelectSubset<T, publisherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Publishers and returns the data saved in the database.
     * @param {publisherCreateManyAndReturnArgs} args - Arguments to create many Publishers.
     * @example
     * // Create many Publishers
     * const publisher = await prisma.publisher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Publishers and only return the `publisher_id`
     * const publisherWithPublisher_idOnly = await prisma.publisher.createManyAndReturn({
     *   select: { publisher_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends publisherCreateManyAndReturnArgs>(args?: SelectSubset<T, publisherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$publisherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Publisher.
     * @param {publisherDeleteArgs} args - Arguments to delete one Publisher.
     * @example
     * // Delete one Publisher
     * const Publisher = await prisma.publisher.delete({
     *   where: {
     *     // ... filter to delete one Publisher
     *   }
     * })
     * 
     */
    delete<T extends publisherDeleteArgs>(args: SelectSubset<T, publisherDeleteArgs<ExtArgs>>): Prisma__publisherClient<$Result.GetResult<Prisma.$publisherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Publisher.
     * @param {publisherUpdateArgs} args - Arguments to update one Publisher.
     * @example
     * // Update one Publisher
     * const publisher = await prisma.publisher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends publisherUpdateArgs>(args: SelectSubset<T, publisherUpdateArgs<ExtArgs>>): Prisma__publisherClient<$Result.GetResult<Prisma.$publisherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Publishers.
     * @param {publisherDeleteManyArgs} args - Arguments to filter Publishers to delete.
     * @example
     * // Delete a few Publishers
     * const { count } = await prisma.publisher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends publisherDeleteManyArgs>(args?: SelectSubset<T, publisherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Publishers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publisherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Publishers
     * const publisher = await prisma.publisher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends publisherUpdateManyArgs>(args: SelectSubset<T, publisherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Publishers and returns the data updated in the database.
     * @param {publisherUpdateManyAndReturnArgs} args - Arguments to update many Publishers.
     * @example
     * // Update many Publishers
     * const publisher = await prisma.publisher.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Publishers and only return the `publisher_id`
     * const publisherWithPublisher_idOnly = await prisma.publisher.updateManyAndReturn({
     *   select: { publisher_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends publisherUpdateManyAndReturnArgs>(args: SelectSubset<T, publisherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$publisherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Publisher.
     * @param {publisherUpsertArgs} args - Arguments to update or create a Publisher.
     * @example
     * // Update or create a Publisher
     * const publisher = await prisma.publisher.upsert({
     *   create: {
     *     // ... data to create a Publisher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Publisher we want to update
     *   }
     * })
     */
    upsert<T extends publisherUpsertArgs>(args: SelectSubset<T, publisherUpsertArgs<ExtArgs>>): Prisma__publisherClient<$Result.GetResult<Prisma.$publisherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Publishers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publisherCountArgs} args - Arguments to filter Publishers to count.
     * @example
     * // Count the number of Publishers
     * const count = await prisma.publisher.count({
     *   where: {
     *     // ... the filter for the Publishers we want to count
     *   }
     * })
    **/
    count<T extends publisherCountArgs>(
      args?: Subset<T, publisherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublisherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Publisher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PublisherAggregateArgs>(args: Subset<T, PublisherAggregateArgs>): Prisma.PrismaPromise<GetPublisherAggregateType<T>>

    /**
     * Group by Publisher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publisherGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends publisherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: publisherGroupByArgs['orderBy'] }
        : { orderBy?: publisherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, publisherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublisherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the publisher model
   */
  readonly fields: publisherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for publisher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__publisherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends publisher$bookArgs<ExtArgs> = {}>(args?: Subset<T, publisher$bookArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the publisher model
   */
  interface publisherFieldRefs {
    readonly publisher_id: FieldRef<"publisher", 'Int'>
    readonly name_and_surname: FieldRef<"publisher", 'String'>
    readonly address: FieldRef<"publisher", 'String'>
    readonly phone: FieldRef<"publisher", 'String'>
  }
    

  // Custom InputTypes
  /**
   * publisher findUnique
   */
  export type publisherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publisher
     */
    select?: publisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the publisher
     */
    omit?: publisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publisherInclude<ExtArgs> | null
    /**
     * Filter, which publisher to fetch.
     */
    where: publisherWhereUniqueInput
  }

  /**
   * publisher findUniqueOrThrow
   */
  export type publisherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publisher
     */
    select?: publisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the publisher
     */
    omit?: publisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publisherInclude<ExtArgs> | null
    /**
     * Filter, which publisher to fetch.
     */
    where: publisherWhereUniqueInput
  }

  /**
   * publisher findFirst
   */
  export type publisherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publisher
     */
    select?: publisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the publisher
     */
    omit?: publisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publisherInclude<ExtArgs> | null
    /**
     * Filter, which publisher to fetch.
     */
    where?: publisherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of publishers to fetch.
     */
    orderBy?: publisherOrderByWithRelationInput | publisherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for publishers.
     */
    cursor?: publisherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` publishers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` publishers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of publishers.
     */
    distinct?: PublisherScalarFieldEnum | PublisherScalarFieldEnum[]
  }

  /**
   * publisher findFirstOrThrow
   */
  export type publisherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publisher
     */
    select?: publisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the publisher
     */
    omit?: publisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publisherInclude<ExtArgs> | null
    /**
     * Filter, which publisher to fetch.
     */
    where?: publisherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of publishers to fetch.
     */
    orderBy?: publisherOrderByWithRelationInput | publisherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for publishers.
     */
    cursor?: publisherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` publishers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` publishers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of publishers.
     */
    distinct?: PublisherScalarFieldEnum | PublisherScalarFieldEnum[]
  }

  /**
   * publisher findMany
   */
  export type publisherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publisher
     */
    select?: publisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the publisher
     */
    omit?: publisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publisherInclude<ExtArgs> | null
    /**
     * Filter, which publishers to fetch.
     */
    where?: publisherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of publishers to fetch.
     */
    orderBy?: publisherOrderByWithRelationInput | publisherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing publishers.
     */
    cursor?: publisherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` publishers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` publishers.
     */
    skip?: number
    distinct?: PublisherScalarFieldEnum | PublisherScalarFieldEnum[]
  }

  /**
   * publisher create
   */
  export type publisherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publisher
     */
    select?: publisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the publisher
     */
    omit?: publisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publisherInclude<ExtArgs> | null
    /**
     * The data needed to create a publisher.
     */
    data: XOR<publisherCreateInput, publisherUncheckedCreateInput>
  }

  /**
   * publisher createMany
   */
  export type publisherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many publishers.
     */
    data: publisherCreateManyInput | publisherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * publisher createManyAndReturn
   */
  export type publisherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publisher
     */
    select?: publisherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the publisher
     */
    omit?: publisherOmit<ExtArgs> | null
    /**
     * The data used to create many publishers.
     */
    data: publisherCreateManyInput | publisherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * publisher update
   */
  export type publisherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publisher
     */
    select?: publisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the publisher
     */
    omit?: publisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publisherInclude<ExtArgs> | null
    /**
     * The data needed to update a publisher.
     */
    data: XOR<publisherUpdateInput, publisherUncheckedUpdateInput>
    /**
     * Choose, which publisher to update.
     */
    where: publisherWhereUniqueInput
  }

  /**
   * publisher updateMany
   */
  export type publisherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update publishers.
     */
    data: XOR<publisherUpdateManyMutationInput, publisherUncheckedUpdateManyInput>
    /**
     * Filter which publishers to update
     */
    where?: publisherWhereInput
    /**
     * Limit how many publishers to update.
     */
    limit?: number
  }

  /**
   * publisher updateManyAndReturn
   */
  export type publisherUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publisher
     */
    select?: publisherSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the publisher
     */
    omit?: publisherOmit<ExtArgs> | null
    /**
     * The data used to update publishers.
     */
    data: XOR<publisherUpdateManyMutationInput, publisherUncheckedUpdateManyInput>
    /**
     * Filter which publishers to update
     */
    where?: publisherWhereInput
    /**
     * Limit how many publishers to update.
     */
    limit?: number
  }

  /**
   * publisher upsert
   */
  export type publisherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publisher
     */
    select?: publisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the publisher
     */
    omit?: publisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publisherInclude<ExtArgs> | null
    /**
     * The filter to search for the publisher to update in case it exists.
     */
    where: publisherWhereUniqueInput
    /**
     * In case the publisher found by the `where` argument doesn't exist, create a new publisher with this data.
     */
    create: XOR<publisherCreateInput, publisherUncheckedCreateInput>
    /**
     * In case the publisher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<publisherUpdateInput, publisherUncheckedUpdateInput>
  }

  /**
   * publisher delete
   */
  export type publisherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publisher
     */
    select?: publisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the publisher
     */
    omit?: publisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publisherInclude<ExtArgs> | null
    /**
     * Filter which publisher to delete.
     */
    where: publisherWhereUniqueInput
  }

  /**
   * publisher deleteMany
   */
  export type publisherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which publishers to delete
     */
    where?: publisherWhereInput
    /**
     * Limit how many publishers to delete.
     */
    limit?: number
  }

  /**
   * publisher.book
   */
  export type publisher$bookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    where?: bookWhereInput
    orderBy?: bookOrderByWithRelationInput | bookOrderByWithRelationInput[]
    cursor?: bookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * publisher without action
   */
  export type publisherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publisher
     */
    select?: publisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the publisher
     */
    omit?: publisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publisherInclude<ExtArgs> | null
  }


  /**
   * Model review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    book_id: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    rating: number | null
    book_id: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    rating: number | null
    comment: string | null
    book_id: number | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    rating: number | null
    comment: string | null
    book_id: number | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    rating: number
    comment: number
    book_id: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    rating?: true
    book_id?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    rating?: true
    book_id?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    book_id?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    book_id?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    book_id?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which review to aggregate.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type reviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithAggregationInput | reviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: reviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    rating: number
    comment: string | null
    book_id: number
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends reviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type reviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    book_id?: boolean
    book?: boolean | bookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type reviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    book_id?: boolean
    book?: boolean | bookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type reviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    book_id?: boolean
    book?: boolean | bookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type reviewSelectScalar = {
    id?: boolean
    rating?: boolean
    comment?: boolean
    book_id?: boolean
  }

  export type reviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rating" | "comment" | "book_id", ExtArgs["result"]["review"]>
  export type reviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | bookDefaultArgs<ExtArgs>
  }
  export type reviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | bookDefaultArgs<ExtArgs>
  }
  export type reviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | bookDefaultArgs<ExtArgs>
  }

  export type $reviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "review"
    objects: {
      book: Prisma.$bookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rating: number
      comment: string | null
      book_id: number
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type reviewGetPayload<S extends boolean | null | undefined | reviewDefaultArgs> = $Result.GetResult<Prisma.$reviewPayload, S>

  type reviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface reviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['review'], meta: { name: 'review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {reviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reviewFindUniqueArgs>(args: SelectSubset<T, reviewFindUniqueArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reviewFindUniqueOrThrowArgs>(args: SelectSubset<T, reviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reviewFindFirstArgs>(args?: SelectSubset<T, reviewFindFirstArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reviewFindFirstOrThrowArgs>(args?: SelectSubset<T, reviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends reviewFindManyArgs>(args?: SelectSubset<T, reviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {reviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends reviewCreateArgs>(args: SelectSubset<T, reviewCreateArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {reviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reviewCreateManyArgs>(args?: SelectSubset<T, reviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {reviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends reviewCreateManyAndReturnArgs>(args?: SelectSubset<T, reviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {reviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends reviewDeleteArgs>(args: SelectSubset<T, reviewDeleteArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {reviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reviewUpdateArgs>(args: SelectSubset<T, reviewUpdateArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {reviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reviewDeleteManyArgs>(args?: SelectSubset<T, reviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reviewUpdateManyArgs>(args: SelectSubset<T, reviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {reviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends reviewUpdateManyAndReturnArgs>(args: SelectSubset<T, reviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {reviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends reviewUpsertArgs>(args: SelectSubset<T, reviewUpsertArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends reviewCountArgs>(
      args?: Subset<T, reviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends reviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reviewGroupByArgs['orderBy'] }
        : { orderBy?: reviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, reviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the review model
   */
  readonly fields: reviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends bookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, bookDefaultArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the review model
   */
  interface reviewFieldRefs {
    readonly id: FieldRef<"review", 'Int'>
    readonly rating: FieldRef<"review", 'Int'>
    readonly comment: FieldRef<"review", 'String'>
    readonly book_id: FieldRef<"review", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * review findUnique
   */
  export type reviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review findUniqueOrThrow
   */
  export type reviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review findFirst
   */
  export type reviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review findFirstOrThrow
   */
  export type reviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review findMany
   */
  export type reviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review create
   */
  export type reviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The data needed to create a review.
     */
    data: XOR<reviewCreateInput, reviewUncheckedCreateInput>
  }

  /**
   * review createMany
   */
  export type reviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reviews.
     */
    data: reviewCreateManyInput | reviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * review createManyAndReturn
   */
  export type reviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * The data used to create many reviews.
     */
    data: reviewCreateManyInput | reviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * review update
   */
  export type reviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The data needed to update a review.
     */
    data: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>
    /**
     * Choose, which review to update.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review updateMany
   */
  export type reviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyInput>
    /**
     * Filter which reviews to update
     */
    where?: reviewWhereInput
    /**
     * Limit how many reviews to update.
     */
    limit?: number
  }

  /**
   * review updateManyAndReturn
   */
  export type reviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyInput>
    /**
     * Filter which reviews to update
     */
    where?: reviewWhereInput
    /**
     * Limit how many reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * review upsert
   */
  export type reviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The filter to search for the review to update in case it exists.
     */
    where: reviewWhereUniqueInput
    /**
     * In case the review found by the `where` argument doesn't exist, create a new review with this data.
     */
    create: XOR<reviewCreateInput, reviewUncheckedCreateInput>
    /**
     * In case the review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>
  }

  /**
   * review delete
   */
  export type reviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter which review to delete.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review deleteMany
   */
  export type reviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reviews to delete
     */
    where?: reviewWhereInput
    /**
     * Limit how many reviews to delete.
     */
    limit?: number
  }

  /**
   * review without action
   */
  export type reviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AuthorScalarFieldEnum: {
    author_id: 'author_id',
    full_name: 'full_name',
    birth_date: 'birth_date'
  };

  export type AuthorScalarFieldEnum = (typeof AuthorScalarFieldEnum)[keyof typeof AuthorScalarFieldEnum]


  export const BookScalarFieldEnum: {
    book_id: 'book_id',
    isbn: 'isbn',
    title: 'title',
    year_published: 'year_published',
    genre: 'genre',
    publisher_id: 'publisher_id'
  };

  export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum]


  export const BookauthorScalarFieldEnum: {
    book_id: 'book_id',
    author_id: 'author_id'
  };

  export type BookauthorScalarFieldEnum = (typeof BookauthorScalarFieldEnum)[keyof typeof BookauthorScalarFieldEnum]


  export const CopyScalarFieldEnum: {
    copy_id: 'copy_id',
    book_id: 'book_id',
    condition: 'condition',
    is_availible: 'is_availible'
  };

  export type CopyScalarFieldEnum = (typeof CopyScalarFieldEnum)[keyof typeof CopyScalarFieldEnum]


  export const FineScalarFieldEnum: {
    fine_id: 'fine_id',
    loan_id: 'loan_id',
    amount: 'amount'
  };

  export type FineScalarFieldEnum = (typeof FineScalarFieldEnum)[keyof typeof FineScalarFieldEnum]


  export const LoanScalarFieldEnum: {
    loan_id: 'loan_id',
    copy_id: 'copy_id',
    member_id: 'member_id',
    loan_date: 'loan_date',
    due_date: 'due_date',
    return_date: 'return_date'
  };

  export type LoanScalarFieldEnum = (typeof LoanScalarFieldEnum)[keyof typeof LoanScalarFieldEnum]


  export const MemberScalarFieldEnum: {
    member_id: 'member_id',
    full_name: 'full_name',
    email: 'email',
    phone: 'phone',
    address: 'address',
    member_type: 'member_type',
    join_date: 'join_date'
  };

  export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum]


  export const PublisherScalarFieldEnum: {
    publisher_id: 'publisher_id',
    name_and_surname: 'name_and_surname',
    address: 'address',
    phone: 'phone'
  };

  export type PublisherScalarFieldEnum = (typeof PublisherScalarFieldEnum)[keyof typeof PublisherScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    rating: 'rating',
    comment: 'comment',
    book_id: 'book_id'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type authorWhereInput = {
    AND?: authorWhereInput | authorWhereInput[]
    OR?: authorWhereInput[]
    NOT?: authorWhereInput | authorWhereInput[]
    author_id?: IntFilter<"author"> | number
    full_name?: StringFilter<"author"> | string
    birth_date?: DateTimeNullableFilter<"author"> | Date | string | null
    bookauthor?: BookauthorListRelationFilter
  }

  export type authorOrderByWithRelationInput = {
    author_id?: SortOrder
    full_name?: SortOrder
    birth_date?: SortOrderInput | SortOrder
    bookauthor?: bookauthorOrderByRelationAggregateInput
  }

  export type authorWhereUniqueInput = Prisma.AtLeast<{
    author_id?: number
    AND?: authorWhereInput | authorWhereInput[]
    OR?: authorWhereInput[]
    NOT?: authorWhereInput | authorWhereInput[]
    full_name?: StringFilter<"author"> | string
    birth_date?: DateTimeNullableFilter<"author"> | Date | string | null
    bookauthor?: BookauthorListRelationFilter
  }, "author_id">

  export type authorOrderByWithAggregationInput = {
    author_id?: SortOrder
    full_name?: SortOrder
    birth_date?: SortOrderInput | SortOrder
    _count?: authorCountOrderByAggregateInput
    _avg?: authorAvgOrderByAggregateInput
    _max?: authorMaxOrderByAggregateInput
    _min?: authorMinOrderByAggregateInput
    _sum?: authorSumOrderByAggregateInput
  }

  export type authorScalarWhereWithAggregatesInput = {
    AND?: authorScalarWhereWithAggregatesInput | authorScalarWhereWithAggregatesInput[]
    OR?: authorScalarWhereWithAggregatesInput[]
    NOT?: authorScalarWhereWithAggregatesInput | authorScalarWhereWithAggregatesInput[]
    author_id?: IntWithAggregatesFilter<"author"> | number
    full_name?: StringWithAggregatesFilter<"author"> | string
    birth_date?: DateTimeNullableWithAggregatesFilter<"author"> | Date | string | null
  }

  export type bookWhereInput = {
    AND?: bookWhereInput | bookWhereInput[]
    OR?: bookWhereInput[]
    NOT?: bookWhereInput | bookWhereInput[]
    book_id?: IntFilter<"book"> | number
    isbn?: StringFilter<"book"> | string
    title?: StringFilter<"book"> | string
    year_published?: IntNullableFilter<"book"> | number | null
    genre?: StringNullableFilter<"book"> | string | null
    publisher_id?: IntNullableFilter<"book"> | number | null
    publisher?: XOR<PublisherNullableScalarRelationFilter, publisherWhereInput> | null
    bookauthor?: BookauthorListRelationFilter
    copy?: CopyListRelationFilter
    review?: ReviewListRelationFilter
  }

  export type bookOrderByWithRelationInput = {
    book_id?: SortOrder
    isbn?: SortOrder
    title?: SortOrder
    year_published?: SortOrderInput | SortOrder
    genre?: SortOrderInput | SortOrder
    publisher_id?: SortOrderInput | SortOrder
    publisher?: publisherOrderByWithRelationInput
    bookauthor?: bookauthorOrderByRelationAggregateInput
    copy?: copyOrderByRelationAggregateInput
    review?: reviewOrderByRelationAggregateInput
  }

  export type bookWhereUniqueInput = Prisma.AtLeast<{
    book_id?: number
    isbn?: string
    AND?: bookWhereInput | bookWhereInput[]
    OR?: bookWhereInput[]
    NOT?: bookWhereInput | bookWhereInput[]
    title?: StringFilter<"book"> | string
    year_published?: IntNullableFilter<"book"> | number | null
    genre?: StringNullableFilter<"book"> | string | null
    publisher_id?: IntNullableFilter<"book"> | number | null
    publisher?: XOR<PublisherNullableScalarRelationFilter, publisherWhereInput> | null
    bookauthor?: BookauthorListRelationFilter
    copy?: CopyListRelationFilter
    review?: ReviewListRelationFilter
  }, "book_id" | "isbn">

  export type bookOrderByWithAggregationInput = {
    book_id?: SortOrder
    isbn?: SortOrder
    title?: SortOrder
    year_published?: SortOrderInput | SortOrder
    genre?: SortOrderInput | SortOrder
    publisher_id?: SortOrderInput | SortOrder
    _count?: bookCountOrderByAggregateInput
    _avg?: bookAvgOrderByAggregateInput
    _max?: bookMaxOrderByAggregateInput
    _min?: bookMinOrderByAggregateInput
    _sum?: bookSumOrderByAggregateInput
  }

  export type bookScalarWhereWithAggregatesInput = {
    AND?: bookScalarWhereWithAggregatesInput | bookScalarWhereWithAggregatesInput[]
    OR?: bookScalarWhereWithAggregatesInput[]
    NOT?: bookScalarWhereWithAggregatesInput | bookScalarWhereWithAggregatesInput[]
    book_id?: IntWithAggregatesFilter<"book"> | number
    isbn?: StringWithAggregatesFilter<"book"> | string
    title?: StringWithAggregatesFilter<"book"> | string
    year_published?: IntNullableWithAggregatesFilter<"book"> | number | null
    genre?: StringNullableWithAggregatesFilter<"book"> | string | null
    publisher_id?: IntNullableWithAggregatesFilter<"book"> | number | null
  }

  export type bookauthorWhereInput = {
    AND?: bookauthorWhereInput | bookauthorWhereInput[]
    OR?: bookauthorWhereInput[]
    NOT?: bookauthorWhereInput | bookauthorWhereInput[]
    book_id?: IntFilter<"bookauthor"> | number
    author_id?: IntFilter<"bookauthor"> | number
    author?: XOR<AuthorScalarRelationFilter, authorWhereInput>
    book?: XOR<BookScalarRelationFilter, bookWhereInput>
  }

  export type bookauthorOrderByWithRelationInput = {
    book_id?: SortOrder
    author_id?: SortOrder
    author?: authorOrderByWithRelationInput
    book?: bookOrderByWithRelationInput
  }

  export type bookauthorWhereUniqueInput = Prisma.AtLeast<{
    book_id_author_id?: bookauthorBook_idAuthor_idCompoundUniqueInput
    AND?: bookauthorWhereInput | bookauthorWhereInput[]
    OR?: bookauthorWhereInput[]
    NOT?: bookauthorWhereInput | bookauthorWhereInput[]
    book_id?: IntFilter<"bookauthor"> | number
    author_id?: IntFilter<"bookauthor"> | number
    author?: XOR<AuthorScalarRelationFilter, authorWhereInput>
    book?: XOR<BookScalarRelationFilter, bookWhereInput>
  }, "book_id_author_id">

  export type bookauthorOrderByWithAggregationInput = {
    book_id?: SortOrder
    author_id?: SortOrder
    _count?: bookauthorCountOrderByAggregateInput
    _avg?: bookauthorAvgOrderByAggregateInput
    _max?: bookauthorMaxOrderByAggregateInput
    _min?: bookauthorMinOrderByAggregateInput
    _sum?: bookauthorSumOrderByAggregateInput
  }

  export type bookauthorScalarWhereWithAggregatesInput = {
    AND?: bookauthorScalarWhereWithAggregatesInput | bookauthorScalarWhereWithAggregatesInput[]
    OR?: bookauthorScalarWhereWithAggregatesInput[]
    NOT?: bookauthorScalarWhereWithAggregatesInput | bookauthorScalarWhereWithAggregatesInput[]
    book_id?: IntWithAggregatesFilter<"bookauthor"> | number
    author_id?: IntWithAggregatesFilter<"bookauthor"> | number
  }

  export type copyWhereInput = {
    AND?: copyWhereInput | copyWhereInput[]
    OR?: copyWhereInput[]
    NOT?: copyWhereInput | copyWhereInput[]
    copy_id?: IntFilter<"copy"> | number
    book_id?: IntNullableFilter<"copy"> | number | null
    condition?: StringNullableFilter<"copy"> | string | null
    is_availible?: BoolNullableFilter<"copy"> | boolean | null
    book?: XOR<BookNullableScalarRelationFilter, bookWhereInput> | null
    loan?: LoanListRelationFilter
  }

  export type copyOrderByWithRelationInput = {
    copy_id?: SortOrder
    book_id?: SortOrderInput | SortOrder
    condition?: SortOrderInput | SortOrder
    is_availible?: SortOrderInput | SortOrder
    book?: bookOrderByWithRelationInput
    loan?: loanOrderByRelationAggregateInput
  }

  export type copyWhereUniqueInput = Prisma.AtLeast<{
    copy_id?: number
    AND?: copyWhereInput | copyWhereInput[]
    OR?: copyWhereInput[]
    NOT?: copyWhereInput | copyWhereInput[]
    book_id?: IntNullableFilter<"copy"> | number | null
    condition?: StringNullableFilter<"copy"> | string | null
    is_availible?: BoolNullableFilter<"copy"> | boolean | null
    book?: XOR<BookNullableScalarRelationFilter, bookWhereInput> | null
    loan?: LoanListRelationFilter
  }, "copy_id">

  export type copyOrderByWithAggregationInput = {
    copy_id?: SortOrder
    book_id?: SortOrderInput | SortOrder
    condition?: SortOrderInput | SortOrder
    is_availible?: SortOrderInput | SortOrder
    _count?: copyCountOrderByAggregateInput
    _avg?: copyAvgOrderByAggregateInput
    _max?: copyMaxOrderByAggregateInput
    _min?: copyMinOrderByAggregateInput
    _sum?: copySumOrderByAggregateInput
  }

  export type copyScalarWhereWithAggregatesInput = {
    AND?: copyScalarWhereWithAggregatesInput | copyScalarWhereWithAggregatesInput[]
    OR?: copyScalarWhereWithAggregatesInput[]
    NOT?: copyScalarWhereWithAggregatesInput | copyScalarWhereWithAggregatesInput[]
    copy_id?: IntWithAggregatesFilter<"copy"> | number
    book_id?: IntNullableWithAggregatesFilter<"copy"> | number | null
    condition?: StringNullableWithAggregatesFilter<"copy"> | string | null
    is_availible?: BoolNullableWithAggregatesFilter<"copy"> | boolean | null
  }

  export type fineWhereInput = {
    AND?: fineWhereInput | fineWhereInput[]
    OR?: fineWhereInput[]
    NOT?: fineWhereInput | fineWhereInput[]
    fine_id?: IntFilter<"fine"> | number
    loan_id?: IntNullableFilter<"fine"> | number | null
    amount?: DecimalFilter<"fine"> | Decimal | DecimalJsLike | number | string
    loan?: XOR<LoanNullableScalarRelationFilter, loanWhereInput> | null
  }

  export type fineOrderByWithRelationInput = {
    fine_id?: SortOrder
    loan_id?: SortOrderInput | SortOrder
    amount?: SortOrder
    loan?: loanOrderByWithRelationInput
  }

  export type fineWhereUniqueInput = Prisma.AtLeast<{
    fine_id?: number
    AND?: fineWhereInput | fineWhereInput[]
    OR?: fineWhereInput[]
    NOT?: fineWhereInput | fineWhereInput[]
    loan_id?: IntNullableFilter<"fine"> | number | null
    amount?: DecimalFilter<"fine"> | Decimal | DecimalJsLike | number | string
    loan?: XOR<LoanNullableScalarRelationFilter, loanWhereInput> | null
  }, "fine_id">

  export type fineOrderByWithAggregationInput = {
    fine_id?: SortOrder
    loan_id?: SortOrderInput | SortOrder
    amount?: SortOrder
    _count?: fineCountOrderByAggregateInput
    _avg?: fineAvgOrderByAggregateInput
    _max?: fineMaxOrderByAggregateInput
    _min?: fineMinOrderByAggregateInput
    _sum?: fineSumOrderByAggregateInput
  }

  export type fineScalarWhereWithAggregatesInput = {
    AND?: fineScalarWhereWithAggregatesInput | fineScalarWhereWithAggregatesInput[]
    OR?: fineScalarWhereWithAggregatesInput[]
    NOT?: fineScalarWhereWithAggregatesInput | fineScalarWhereWithAggregatesInput[]
    fine_id?: IntWithAggregatesFilter<"fine"> | number
    loan_id?: IntNullableWithAggregatesFilter<"fine"> | number | null
    amount?: DecimalWithAggregatesFilter<"fine"> | Decimal | DecimalJsLike | number | string
  }

  export type loanWhereInput = {
    AND?: loanWhereInput | loanWhereInput[]
    OR?: loanWhereInput[]
    NOT?: loanWhereInput | loanWhereInput[]
    loan_id?: IntFilter<"loan"> | number
    copy_id?: IntNullableFilter<"loan"> | number | null
    member_id?: IntNullableFilter<"loan"> | number | null
    loan_date?: DateTimeFilter<"loan"> | Date | string
    due_date?: DateTimeNullableFilter<"loan"> | Date | string | null
    return_date?: DateTimeNullableFilter<"loan"> | Date | string | null
    fine?: FineListRelationFilter
    copy?: XOR<CopyNullableScalarRelationFilter, copyWhereInput> | null
    member?: XOR<MemberNullableScalarRelationFilter, memberWhereInput> | null
  }

  export type loanOrderByWithRelationInput = {
    loan_id?: SortOrder
    copy_id?: SortOrderInput | SortOrder
    member_id?: SortOrderInput | SortOrder
    loan_date?: SortOrder
    due_date?: SortOrderInput | SortOrder
    return_date?: SortOrderInput | SortOrder
    fine?: fineOrderByRelationAggregateInput
    copy?: copyOrderByWithRelationInput
    member?: memberOrderByWithRelationInput
  }

  export type loanWhereUniqueInput = Prisma.AtLeast<{
    loan_id?: number
    AND?: loanWhereInput | loanWhereInput[]
    OR?: loanWhereInput[]
    NOT?: loanWhereInput | loanWhereInput[]
    copy_id?: IntNullableFilter<"loan"> | number | null
    member_id?: IntNullableFilter<"loan"> | number | null
    loan_date?: DateTimeFilter<"loan"> | Date | string
    due_date?: DateTimeNullableFilter<"loan"> | Date | string | null
    return_date?: DateTimeNullableFilter<"loan"> | Date | string | null
    fine?: FineListRelationFilter
    copy?: XOR<CopyNullableScalarRelationFilter, copyWhereInput> | null
    member?: XOR<MemberNullableScalarRelationFilter, memberWhereInput> | null
  }, "loan_id">

  export type loanOrderByWithAggregationInput = {
    loan_id?: SortOrder
    copy_id?: SortOrderInput | SortOrder
    member_id?: SortOrderInput | SortOrder
    loan_date?: SortOrder
    due_date?: SortOrderInput | SortOrder
    return_date?: SortOrderInput | SortOrder
    _count?: loanCountOrderByAggregateInput
    _avg?: loanAvgOrderByAggregateInput
    _max?: loanMaxOrderByAggregateInput
    _min?: loanMinOrderByAggregateInput
    _sum?: loanSumOrderByAggregateInput
  }

  export type loanScalarWhereWithAggregatesInput = {
    AND?: loanScalarWhereWithAggregatesInput | loanScalarWhereWithAggregatesInput[]
    OR?: loanScalarWhereWithAggregatesInput[]
    NOT?: loanScalarWhereWithAggregatesInput | loanScalarWhereWithAggregatesInput[]
    loan_id?: IntWithAggregatesFilter<"loan"> | number
    copy_id?: IntNullableWithAggregatesFilter<"loan"> | number | null
    member_id?: IntNullableWithAggregatesFilter<"loan"> | number | null
    loan_date?: DateTimeWithAggregatesFilter<"loan"> | Date | string
    due_date?: DateTimeNullableWithAggregatesFilter<"loan"> | Date | string | null
    return_date?: DateTimeNullableWithAggregatesFilter<"loan"> | Date | string | null
  }

  export type memberWhereInput = {
    AND?: memberWhereInput | memberWhereInput[]
    OR?: memberWhereInput[]
    NOT?: memberWhereInput | memberWhereInput[]
    member_id?: IntFilter<"member"> | number
    full_name?: StringFilter<"member"> | string
    email?: StringFilter<"member"> | string
    phone?: StringNullableFilter<"member"> | string | null
    address?: StringNullableFilter<"member"> | string | null
    member_type?: StringNullableFilter<"member"> | string | null
    join_date?: DateTimeNullableFilter<"member"> | Date | string | null
    loan?: LoanListRelationFilter
  }

  export type memberOrderByWithRelationInput = {
    member_id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    member_type?: SortOrderInput | SortOrder
    join_date?: SortOrderInput | SortOrder
    loan?: loanOrderByRelationAggregateInput
  }

  export type memberWhereUniqueInput = Prisma.AtLeast<{
    member_id?: number
    email?: string
    AND?: memberWhereInput | memberWhereInput[]
    OR?: memberWhereInput[]
    NOT?: memberWhereInput | memberWhereInput[]
    full_name?: StringFilter<"member"> | string
    phone?: StringNullableFilter<"member"> | string | null
    address?: StringNullableFilter<"member"> | string | null
    member_type?: StringNullableFilter<"member"> | string | null
    join_date?: DateTimeNullableFilter<"member"> | Date | string | null
    loan?: LoanListRelationFilter
  }, "member_id" | "email">

  export type memberOrderByWithAggregationInput = {
    member_id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    member_type?: SortOrderInput | SortOrder
    join_date?: SortOrderInput | SortOrder
    _count?: memberCountOrderByAggregateInput
    _avg?: memberAvgOrderByAggregateInput
    _max?: memberMaxOrderByAggregateInput
    _min?: memberMinOrderByAggregateInput
    _sum?: memberSumOrderByAggregateInput
  }

  export type memberScalarWhereWithAggregatesInput = {
    AND?: memberScalarWhereWithAggregatesInput | memberScalarWhereWithAggregatesInput[]
    OR?: memberScalarWhereWithAggregatesInput[]
    NOT?: memberScalarWhereWithAggregatesInput | memberScalarWhereWithAggregatesInput[]
    member_id?: IntWithAggregatesFilter<"member"> | number
    full_name?: StringWithAggregatesFilter<"member"> | string
    email?: StringWithAggregatesFilter<"member"> | string
    phone?: StringNullableWithAggregatesFilter<"member"> | string | null
    address?: StringNullableWithAggregatesFilter<"member"> | string | null
    member_type?: StringNullableWithAggregatesFilter<"member"> | string | null
    join_date?: DateTimeNullableWithAggregatesFilter<"member"> | Date | string | null
  }

  export type publisherWhereInput = {
    AND?: publisherWhereInput | publisherWhereInput[]
    OR?: publisherWhereInput[]
    NOT?: publisherWhereInput | publisherWhereInput[]
    publisher_id?: IntFilter<"publisher"> | number
    name_and_surname?: StringFilter<"publisher"> | string
    address?: StringNullableFilter<"publisher"> | string | null
    phone?: StringNullableFilter<"publisher"> | string | null
    book?: BookListRelationFilter
  }

  export type publisherOrderByWithRelationInput = {
    publisher_id?: SortOrder
    name_and_surname?: SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    book?: bookOrderByRelationAggregateInput
  }

  export type publisherWhereUniqueInput = Prisma.AtLeast<{
    publisher_id?: number
    AND?: publisherWhereInput | publisherWhereInput[]
    OR?: publisherWhereInput[]
    NOT?: publisherWhereInput | publisherWhereInput[]
    name_and_surname?: StringFilter<"publisher"> | string
    address?: StringNullableFilter<"publisher"> | string | null
    phone?: StringNullableFilter<"publisher"> | string | null
    book?: BookListRelationFilter
  }, "publisher_id">

  export type publisherOrderByWithAggregationInput = {
    publisher_id?: SortOrder
    name_and_surname?: SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    _count?: publisherCountOrderByAggregateInput
    _avg?: publisherAvgOrderByAggregateInput
    _max?: publisherMaxOrderByAggregateInput
    _min?: publisherMinOrderByAggregateInput
    _sum?: publisherSumOrderByAggregateInput
  }

  export type publisherScalarWhereWithAggregatesInput = {
    AND?: publisherScalarWhereWithAggregatesInput | publisherScalarWhereWithAggregatesInput[]
    OR?: publisherScalarWhereWithAggregatesInput[]
    NOT?: publisherScalarWhereWithAggregatesInput | publisherScalarWhereWithAggregatesInput[]
    publisher_id?: IntWithAggregatesFilter<"publisher"> | number
    name_and_surname?: StringWithAggregatesFilter<"publisher"> | string
    address?: StringNullableWithAggregatesFilter<"publisher"> | string | null
    phone?: StringNullableWithAggregatesFilter<"publisher"> | string | null
  }

  export type reviewWhereInput = {
    AND?: reviewWhereInput | reviewWhereInput[]
    OR?: reviewWhereInput[]
    NOT?: reviewWhereInput | reviewWhereInput[]
    id?: IntFilter<"review"> | number
    rating?: IntFilter<"review"> | number
    comment?: StringNullableFilter<"review"> | string | null
    book_id?: IntFilter<"review"> | number
    book?: XOR<BookScalarRelationFilter, bookWhereInput>
  }

  export type reviewOrderByWithRelationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    book_id?: SortOrder
    book?: bookOrderByWithRelationInput
  }

  export type reviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: reviewWhereInput | reviewWhereInput[]
    OR?: reviewWhereInput[]
    NOT?: reviewWhereInput | reviewWhereInput[]
    rating?: IntFilter<"review"> | number
    comment?: StringNullableFilter<"review"> | string | null
    book_id?: IntFilter<"review"> | number
    book?: XOR<BookScalarRelationFilter, bookWhereInput>
  }, "id">

  export type reviewOrderByWithAggregationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    book_id?: SortOrder
    _count?: reviewCountOrderByAggregateInput
    _avg?: reviewAvgOrderByAggregateInput
    _max?: reviewMaxOrderByAggregateInput
    _min?: reviewMinOrderByAggregateInput
    _sum?: reviewSumOrderByAggregateInput
  }

  export type reviewScalarWhereWithAggregatesInput = {
    AND?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[]
    OR?: reviewScalarWhereWithAggregatesInput[]
    NOT?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"review"> | number
    rating?: IntWithAggregatesFilter<"review"> | number
    comment?: StringNullableWithAggregatesFilter<"review"> | string | null
    book_id?: IntWithAggregatesFilter<"review"> | number
  }

  export type authorCreateInput = {
    full_name: string
    birth_date?: Date | string | null
    bookauthor?: bookauthorCreateNestedManyWithoutAuthorInput
  }

  export type authorUncheckedCreateInput = {
    author_id?: number
    full_name: string
    birth_date?: Date | string | null
    bookauthor?: bookauthorUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type authorUpdateInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookauthor?: bookauthorUpdateManyWithoutAuthorNestedInput
  }

  export type authorUncheckedUpdateInput = {
    author_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookauthor?: bookauthorUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type authorCreateManyInput = {
    author_id?: number
    full_name: string
    birth_date?: Date | string | null
  }

  export type authorUpdateManyMutationInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type authorUncheckedUpdateManyInput = {
    author_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type bookCreateInput = {
    isbn: string
    title: string
    year_published?: number | null
    genre?: string | null
    publisher?: publisherCreateNestedOneWithoutBookInput
    bookauthor?: bookauthorCreateNestedManyWithoutBookInput
    copy?: copyCreateNestedManyWithoutBookInput
    review?: reviewCreateNestedManyWithoutBookInput
  }

  export type bookUncheckedCreateInput = {
    book_id?: number
    isbn: string
    title: string
    year_published?: number | null
    genre?: string | null
    publisher_id?: number | null
    bookauthor?: bookauthorUncheckedCreateNestedManyWithoutBookInput
    copy?: copyUncheckedCreateNestedManyWithoutBookInput
    review?: reviewUncheckedCreateNestedManyWithoutBookInput
  }

  export type bookUpdateInput = {
    isbn?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    year_published?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: publisherUpdateOneWithoutBookNestedInput
    bookauthor?: bookauthorUpdateManyWithoutBookNestedInput
    copy?: copyUpdateManyWithoutBookNestedInput
    review?: reviewUpdateManyWithoutBookNestedInput
  }

  export type bookUncheckedUpdateInput = {
    book_id?: IntFieldUpdateOperationsInput | number
    isbn?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    year_published?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    publisher_id?: NullableIntFieldUpdateOperationsInput | number | null
    bookauthor?: bookauthorUncheckedUpdateManyWithoutBookNestedInput
    copy?: copyUncheckedUpdateManyWithoutBookNestedInput
    review?: reviewUncheckedUpdateManyWithoutBookNestedInput
  }

  export type bookCreateManyInput = {
    book_id?: number
    isbn: string
    title: string
    year_published?: number | null
    genre?: string | null
    publisher_id?: number | null
  }

  export type bookUpdateManyMutationInput = {
    isbn?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    year_published?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type bookUncheckedUpdateManyInput = {
    book_id?: IntFieldUpdateOperationsInput | number
    isbn?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    year_published?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    publisher_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type bookauthorCreateInput = {
    author: authorCreateNestedOneWithoutBookauthorInput
    book: bookCreateNestedOneWithoutBookauthorInput
  }

  export type bookauthorUncheckedCreateInput = {
    book_id: number
    author_id: number
  }

  export type bookauthorUpdateInput = {
    author?: authorUpdateOneRequiredWithoutBookauthorNestedInput
    book?: bookUpdateOneRequiredWithoutBookauthorNestedInput
  }

  export type bookauthorUncheckedUpdateInput = {
    book_id?: IntFieldUpdateOperationsInput | number
    author_id?: IntFieldUpdateOperationsInput | number
  }

  export type bookauthorCreateManyInput = {
    book_id: number
    author_id: number
  }

  export type bookauthorUpdateManyMutationInput = {

  }

  export type bookauthorUncheckedUpdateManyInput = {
    book_id?: IntFieldUpdateOperationsInput | number
    author_id?: IntFieldUpdateOperationsInput | number
  }

  export type copyCreateInput = {
    condition?: string | null
    is_availible?: boolean | null
    book?: bookCreateNestedOneWithoutCopyInput
    loan?: loanCreateNestedManyWithoutCopyInput
  }

  export type copyUncheckedCreateInput = {
    copy_id?: number
    book_id?: number | null
    condition?: string | null
    is_availible?: boolean | null
    loan?: loanUncheckedCreateNestedManyWithoutCopyInput
  }

  export type copyUpdateInput = {
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    is_availible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    book?: bookUpdateOneWithoutCopyNestedInput
    loan?: loanUpdateManyWithoutCopyNestedInput
  }

  export type copyUncheckedUpdateInput = {
    copy_id?: IntFieldUpdateOperationsInput | number
    book_id?: NullableIntFieldUpdateOperationsInput | number | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    is_availible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    loan?: loanUncheckedUpdateManyWithoutCopyNestedInput
  }

  export type copyCreateManyInput = {
    copy_id?: number
    book_id?: number | null
    condition?: string | null
    is_availible?: boolean | null
  }

  export type copyUpdateManyMutationInput = {
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    is_availible?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type copyUncheckedUpdateManyInput = {
    copy_id?: IntFieldUpdateOperationsInput | number
    book_id?: NullableIntFieldUpdateOperationsInput | number | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    is_availible?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type fineCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    loan?: loanCreateNestedOneWithoutFineInput
  }

  export type fineUncheckedCreateInput = {
    fine_id?: number
    loan_id?: number | null
    amount: Decimal | DecimalJsLike | number | string
  }

  export type fineUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan?: loanUpdateOneWithoutFineNestedInput
  }

  export type fineUncheckedUpdateInput = {
    fine_id?: IntFieldUpdateOperationsInput | number
    loan_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type fineCreateManyInput = {
    fine_id?: number
    loan_id?: number | null
    amount: Decimal | DecimalJsLike | number | string
  }

  export type fineUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type fineUncheckedUpdateManyInput = {
    fine_id?: IntFieldUpdateOperationsInput | number
    loan_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type loanCreateInput = {
    loan_date: Date | string
    due_date?: Date | string | null
    return_date?: Date | string | null
    fine?: fineCreateNestedManyWithoutLoanInput
    copy?: copyCreateNestedOneWithoutLoanInput
    member?: memberCreateNestedOneWithoutLoanInput
  }

  export type loanUncheckedCreateInput = {
    loan_id?: number
    copy_id?: number | null
    member_id?: number | null
    loan_date: Date | string
    due_date?: Date | string | null
    return_date?: Date | string | null
    fine?: fineUncheckedCreateNestedManyWithoutLoanInput
  }

  export type loanUpdateInput = {
    loan_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fine?: fineUpdateManyWithoutLoanNestedInput
    copy?: copyUpdateOneWithoutLoanNestedInput
    member?: memberUpdateOneWithoutLoanNestedInput
  }

  export type loanUncheckedUpdateInput = {
    loan_id?: IntFieldUpdateOperationsInput | number
    copy_id?: NullableIntFieldUpdateOperationsInput | number | null
    member_id?: NullableIntFieldUpdateOperationsInput | number | null
    loan_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fine?: fineUncheckedUpdateManyWithoutLoanNestedInput
  }

  export type loanCreateManyInput = {
    loan_id?: number
    copy_id?: number | null
    member_id?: number | null
    loan_date: Date | string
    due_date?: Date | string | null
    return_date?: Date | string | null
  }

  export type loanUpdateManyMutationInput = {
    loan_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type loanUncheckedUpdateManyInput = {
    loan_id?: IntFieldUpdateOperationsInput | number
    copy_id?: NullableIntFieldUpdateOperationsInput | number | null
    member_id?: NullableIntFieldUpdateOperationsInput | number | null
    loan_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type memberCreateInput = {
    full_name: string
    email: string
    phone?: string | null
    address?: string | null
    member_type?: string | null
    join_date?: Date | string | null
    loan?: loanCreateNestedManyWithoutMemberInput
  }

  export type memberUncheckedCreateInput = {
    member_id?: number
    full_name: string
    email: string
    phone?: string | null
    address?: string | null
    member_type?: string | null
    join_date?: Date | string | null
    loan?: loanUncheckedCreateNestedManyWithoutMemberInput
  }

  export type memberUpdateInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    member_type?: NullableStringFieldUpdateOperationsInput | string | null
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loan?: loanUpdateManyWithoutMemberNestedInput
  }

  export type memberUncheckedUpdateInput = {
    member_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    member_type?: NullableStringFieldUpdateOperationsInput | string | null
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loan?: loanUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type memberCreateManyInput = {
    member_id?: number
    full_name: string
    email: string
    phone?: string | null
    address?: string | null
    member_type?: string | null
    join_date?: Date | string | null
  }

  export type memberUpdateManyMutationInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    member_type?: NullableStringFieldUpdateOperationsInput | string | null
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type memberUncheckedUpdateManyInput = {
    member_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    member_type?: NullableStringFieldUpdateOperationsInput | string | null
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type publisherCreateInput = {
    name_and_surname: string
    address?: string | null
    phone?: string | null
    book?: bookCreateNestedManyWithoutPublisherInput
  }

  export type publisherUncheckedCreateInput = {
    publisher_id?: number
    name_and_surname: string
    address?: string | null
    phone?: string | null
    book?: bookUncheckedCreateNestedManyWithoutPublisherInput
  }

  export type publisherUpdateInput = {
    name_and_surname?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    book?: bookUpdateManyWithoutPublisherNestedInput
  }

  export type publisherUncheckedUpdateInput = {
    publisher_id?: IntFieldUpdateOperationsInput | number
    name_and_surname?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    book?: bookUncheckedUpdateManyWithoutPublisherNestedInput
  }

  export type publisherCreateManyInput = {
    publisher_id?: number
    name_and_surname: string
    address?: string | null
    phone?: string | null
  }

  export type publisherUpdateManyMutationInput = {
    name_and_surname?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type publisherUncheckedUpdateManyInput = {
    publisher_id?: IntFieldUpdateOperationsInput | number
    name_and_surname?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reviewCreateInput = {
    rating: number
    comment?: string | null
    book: bookCreateNestedOneWithoutReviewInput
  }

  export type reviewUncheckedCreateInput = {
    id?: number
    rating: number
    comment?: string | null
    book_id: number
  }

  export type reviewUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    book?: bookUpdateOneRequiredWithoutReviewNestedInput
  }

  export type reviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    book_id?: IntFieldUpdateOperationsInput | number
  }

  export type reviewCreateManyInput = {
    id?: number
    rating: number
    comment?: string | null
    book_id: number
  }

  export type reviewUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    book_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BookauthorListRelationFilter = {
    every?: bookauthorWhereInput
    some?: bookauthorWhereInput
    none?: bookauthorWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type bookauthorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type authorCountOrderByAggregateInput = {
    author_id?: SortOrder
    full_name?: SortOrder
    birth_date?: SortOrder
  }

  export type authorAvgOrderByAggregateInput = {
    author_id?: SortOrder
  }

  export type authorMaxOrderByAggregateInput = {
    author_id?: SortOrder
    full_name?: SortOrder
    birth_date?: SortOrder
  }

  export type authorMinOrderByAggregateInput = {
    author_id?: SortOrder
    full_name?: SortOrder
    birth_date?: SortOrder
  }

  export type authorSumOrderByAggregateInput = {
    author_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type PublisherNullableScalarRelationFilter = {
    is?: publisherWhereInput | null
    isNot?: publisherWhereInput | null
  }

  export type CopyListRelationFilter = {
    every?: copyWhereInput
    some?: copyWhereInput
    none?: copyWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: reviewWhereInput
    some?: reviewWhereInput
    none?: reviewWhereInput
  }

  export type copyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type reviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type bookCountOrderByAggregateInput = {
    book_id?: SortOrder
    isbn?: SortOrder
    title?: SortOrder
    year_published?: SortOrder
    genre?: SortOrder
    publisher_id?: SortOrder
  }

  export type bookAvgOrderByAggregateInput = {
    book_id?: SortOrder
    year_published?: SortOrder
    publisher_id?: SortOrder
  }

  export type bookMaxOrderByAggregateInput = {
    book_id?: SortOrder
    isbn?: SortOrder
    title?: SortOrder
    year_published?: SortOrder
    genre?: SortOrder
    publisher_id?: SortOrder
  }

  export type bookMinOrderByAggregateInput = {
    book_id?: SortOrder
    isbn?: SortOrder
    title?: SortOrder
    year_published?: SortOrder
    genre?: SortOrder
    publisher_id?: SortOrder
  }

  export type bookSumOrderByAggregateInput = {
    book_id?: SortOrder
    year_published?: SortOrder
    publisher_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type AuthorScalarRelationFilter = {
    is?: authorWhereInput
    isNot?: authorWhereInput
  }

  export type BookScalarRelationFilter = {
    is?: bookWhereInput
    isNot?: bookWhereInput
  }

  export type bookauthorBook_idAuthor_idCompoundUniqueInput = {
    book_id: number
    author_id: number
  }

  export type bookauthorCountOrderByAggregateInput = {
    book_id?: SortOrder
    author_id?: SortOrder
  }

  export type bookauthorAvgOrderByAggregateInput = {
    book_id?: SortOrder
    author_id?: SortOrder
  }

  export type bookauthorMaxOrderByAggregateInput = {
    book_id?: SortOrder
    author_id?: SortOrder
  }

  export type bookauthorMinOrderByAggregateInput = {
    book_id?: SortOrder
    author_id?: SortOrder
  }

  export type bookauthorSumOrderByAggregateInput = {
    book_id?: SortOrder
    author_id?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type BookNullableScalarRelationFilter = {
    is?: bookWhereInput | null
    isNot?: bookWhereInput | null
  }

  export type LoanListRelationFilter = {
    every?: loanWhereInput
    some?: loanWhereInput
    none?: loanWhereInput
  }

  export type loanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type copyCountOrderByAggregateInput = {
    copy_id?: SortOrder
    book_id?: SortOrder
    condition?: SortOrder
    is_availible?: SortOrder
  }

  export type copyAvgOrderByAggregateInput = {
    copy_id?: SortOrder
    book_id?: SortOrder
  }

  export type copyMaxOrderByAggregateInput = {
    copy_id?: SortOrder
    book_id?: SortOrder
    condition?: SortOrder
    is_availible?: SortOrder
  }

  export type copyMinOrderByAggregateInput = {
    copy_id?: SortOrder
    book_id?: SortOrder
    condition?: SortOrder
    is_availible?: SortOrder
  }

  export type copySumOrderByAggregateInput = {
    copy_id?: SortOrder
    book_id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type LoanNullableScalarRelationFilter = {
    is?: loanWhereInput | null
    isNot?: loanWhereInput | null
  }

  export type fineCountOrderByAggregateInput = {
    fine_id?: SortOrder
    loan_id?: SortOrder
    amount?: SortOrder
  }

  export type fineAvgOrderByAggregateInput = {
    fine_id?: SortOrder
    loan_id?: SortOrder
    amount?: SortOrder
  }

  export type fineMaxOrderByAggregateInput = {
    fine_id?: SortOrder
    loan_id?: SortOrder
    amount?: SortOrder
  }

  export type fineMinOrderByAggregateInput = {
    fine_id?: SortOrder
    loan_id?: SortOrder
    amount?: SortOrder
  }

  export type fineSumOrderByAggregateInput = {
    fine_id?: SortOrder
    loan_id?: SortOrder
    amount?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FineListRelationFilter = {
    every?: fineWhereInput
    some?: fineWhereInput
    none?: fineWhereInput
  }

  export type CopyNullableScalarRelationFilter = {
    is?: copyWhereInput | null
    isNot?: copyWhereInput | null
  }

  export type MemberNullableScalarRelationFilter = {
    is?: memberWhereInput | null
    isNot?: memberWhereInput | null
  }

  export type fineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type loanCountOrderByAggregateInput = {
    loan_id?: SortOrder
    copy_id?: SortOrder
    member_id?: SortOrder
    loan_date?: SortOrder
    due_date?: SortOrder
    return_date?: SortOrder
  }

  export type loanAvgOrderByAggregateInput = {
    loan_id?: SortOrder
    copy_id?: SortOrder
    member_id?: SortOrder
  }

  export type loanMaxOrderByAggregateInput = {
    loan_id?: SortOrder
    copy_id?: SortOrder
    member_id?: SortOrder
    loan_date?: SortOrder
    due_date?: SortOrder
    return_date?: SortOrder
  }

  export type loanMinOrderByAggregateInput = {
    loan_id?: SortOrder
    copy_id?: SortOrder
    member_id?: SortOrder
    loan_date?: SortOrder
    due_date?: SortOrder
    return_date?: SortOrder
  }

  export type loanSumOrderByAggregateInput = {
    loan_id?: SortOrder
    copy_id?: SortOrder
    member_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type memberCountOrderByAggregateInput = {
    member_id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    member_type?: SortOrder
    join_date?: SortOrder
  }

  export type memberAvgOrderByAggregateInput = {
    member_id?: SortOrder
  }

  export type memberMaxOrderByAggregateInput = {
    member_id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    member_type?: SortOrder
    join_date?: SortOrder
  }

  export type memberMinOrderByAggregateInput = {
    member_id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    member_type?: SortOrder
    join_date?: SortOrder
  }

  export type memberSumOrderByAggregateInput = {
    member_id?: SortOrder
  }

  export type BookListRelationFilter = {
    every?: bookWhereInput
    some?: bookWhereInput
    none?: bookWhereInput
  }

  export type bookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type publisherCountOrderByAggregateInput = {
    publisher_id?: SortOrder
    name_and_surname?: SortOrder
    address?: SortOrder
    phone?: SortOrder
  }

  export type publisherAvgOrderByAggregateInput = {
    publisher_id?: SortOrder
  }

  export type publisherMaxOrderByAggregateInput = {
    publisher_id?: SortOrder
    name_and_surname?: SortOrder
    address?: SortOrder
    phone?: SortOrder
  }

  export type publisherMinOrderByAggregateInput = {
    publisher_id?: SortOrder
    name_and_surname?: SortOrder
    address?: SortOrder
    phone?: SortOrder
  }

  export type publisherSumOrderByAggregateInput = {
    publisher_id?: SortOrder
  }

  export type reviewCountOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    book_id?: SortOrder
  }

  export type reviewAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    book_id?: SortOrder
  }

  export type reviewMaxOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    book_id?: SortOrder
  }

  export type reviewMinOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    book_id?: SortOrder
  }

  export type reviewSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    book_id?: SortOrder
  }

  export type bookauthorCreateNestedManyWithoutAuthorInput = {
    create?: XOR<bookauthorCreateWithoutAuthorInput, bookauthorUncheckedCreateWithoutAuthorInput> | bookauthorCreateWithoutAuthorInput[] | bookauthorUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: bookauthorCreateOrConnectWithoutAuthorInput | bookauthorCreateOrConnectWithoutAuthorInput[]
    createMany?: bookauthorCreateManyAuthorInputEnvelope
    connect?: bookauthorWhereUniqueInput | bookauthorWhereUniqueInput[]
  }

  export type bookauthorUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<bookauthorCreateWithoutAuthorInput, bookauthorUncheckedCreateWithoutAuthorInput> | bookauthorCreateWithoutAuthorInput[] | bookauthorUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: bookauthorCreateOrConnectWithoutAuthorInput | bookauthorCreateOrConnectWithoutAuthorInput[]
    createMany?: bookauthorCreateManyAuthorInputEnvelope
    connect?: bookauthorWhereUniqueInput | bookauthorWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type bookauthorUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<bookauthorCreateWithoutAuthorInput, bookauthorUncheckedCreateWithoutAuthorInput> | bookauthorCreateWithoutAuthorInput[] | bookauthorUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: bookauthorCreateOrConnectWithoutAuthorInput | bookauthorCreateOrConnectWithoutAuthorInput[]
    upsert?: bookauthorUpsertWithWhereUniqueWithoutAuthorInput | bookauthorUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: bookauthorCreateManyAuthorInputEnvelope
    set?: bookauthorWhereUniqueInput | bookauthorWhereUniqueInput[]
    disconnect?: bookauthorWhereUniqueInput | bookauthorWhereUniqueInput[]
    delete?: bookauthorWhereUniqueInput | bookauthorWhereUniqueInput[]
    connect?: bookauthorWhereUniqueInput | bookauthorWhereUniqueInput[]
    update?: bookauthorUpdateWithWhereUniqueWithoutAuthorInput | bookauthorUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: bookauthorUpdateManyWithWhereWithoutAuthorInput | bookauthorUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: bookauthorScalarWhereInput | bookauthorScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type bookauthorUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<bookauthorCreateWithoutAuthorInput, bookauthorUncheckedCreateWithoutAuthorInput> | bookauthorCreateWithoutAuthorInput[] | bookauthorUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: bookauthorCreateOrConnectWithoutAuthorInput | bookauthorCreateOrConnectWithoutAuthorInput[]
    upsert?: bookauthorUpsertWithWhereUniqueWithoutAuthorInput | bookauthorUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: bookauthorCreateManyAuthorInputEnvelope
    set?: bookauthorWhereUniqueInput | bookauthorWhereUniqueInput[]
    disconnect?: bookauthorWhereUniqueInput | bookauthorWhereUniqueInput[]
    delete?: bookauthorWhereUniqueInput | bookauthorWhereUniqueInput[]
    connect?: bookauthorWhereUniqueInput | bookauthorWhereUniqueInput[]
    update?: bookauthorUpdateWithWhereUniqueWithoutAuthorInput | bookauthorUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: bookauthorUpdateManyWithWhereWithoutAuthorInput | bookauthorUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: bookauthorScalarWhereInput | bookauthorScalarWhereInput[]
  }

  export type publisherCreateNestedOneWithoutBookInput = {
    create?: XOR<publisherCreateWithoutBookInput, publisherUncheckedCreateWithoutBookInput>
    connectOrCreate?: publisherCreateOrConnectWithoutBookInput
    connect?: publisherWhereUniqueInput
  }

  export type bookauthorCreateNestedManyWithoutBookInput = {
    create?: XOR<bookauthorCreateWithoutBookInput, bookauthorUncheckedCreateWithoutBookInput> | bookauthorCreateWithoutBookInput[] | bookauthorUncheckedCreateWithoutBookInput[]
    connectOrCreate?: bookauthorCreateOrConnectWithoutBookInput | bookauthorCreateOrConnectWithoutBookInput[]
    createMany?: bookauthorCreateManyBookInputEnvelope
    connect?: bookauthorWhereUniqueInput | bookauthorWhereUniqueInput[]
  }

  export type copyCreateNestedManyWithoutBookInput = {
    create?: XOR<copyCreateWithoutBookInput, copyUncheckedCreateWithoutBookInput> | copyCreateWithoutBookInput[] | copyUncheckedCreateWithoutBookInput[]
    connectOrCreate?: copyCreateOrConnectWithoutBookInput | copyCreateOrConnectWithoutBookInput[]
    createMany?: copyCreateManyBookInputEnvelope
    connect?: copyWhereUniqueInput | copyWhereUniqueInput[]
  }

  export type reviewCreateNestedManyWithoutBookInput = {
    create?: XOR<reviewCreateWithoutBookInput, reviewUncheckedCreateWithoutBookInput> | reviewCreateWithoutBookInput[] | reviewUncheckedCreateWithoutBookInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutBookInput | reviewCreateOrConnectWithoutBookInput[]
    createMany?: reviewCreateManyBookInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type bookauthorUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<bookauthorCreateWithoutBookInput, bookauthorUncheckedCreateWithoutBookInput> | bookauthorCreateWithoutBookInput[] | bookauthorUncheckedCreateWithoutBookInput[]
    connectOrCreate?: bookauthorCreateOrConnectWithoutBookInput | bookauthorCreateOrConnectWithoutBookInput[]
    createMany?: bookauthorCreateManyBookInputEnvelope
    connect?: bookauthorWhereUniqueInput | bookauthorWhereUniqueInput[]
  }

  export type copyUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<copyCreateWithoutBookInput, copyUncheckedCreateWithoutBookInput> | copyCreateWithoutBookInput[] | copyUncheckedCreateWithoutBookInput[]
    connectOrCreate?: copyCreateOrConnectWithoutBookInput | copyCreateOrConnectWithoutBookInput[]
    createMany?: copyCreateManyBookInputEnvelope
    connect?: copyWhereUniqueInput | copyWhereUniqueInput[]
  }

  export type reviewUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<reviewCreateWithoutBookInput, reviewUncheckedCreateWithoutBookInput> | reviewCreateWithoutBookInput[] | reviewUncheckedCreateWithoutBookInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutBookInput | reviewCreateOrConnectWithoutBookInput[]
    createMany?: reviewCreateManyBookInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type publisherUpdateOneWithoutBookNestedInput = {
    create?: XOR<publisherCreateWithoutBookInput, publisherUncheckedCreateWithoutBookInput>
    connectOrCreate?: publisherCreateOrConnectWithoutBookInput
    upsert?: publisherUpsertWithoutBookInput
    disconnect?: publisherWhereInput | boolean
    delete?: publisherWhereInput | boolean
    connect?: publisherWhereUniqueInput
    update?: XOR<XOR<publisherUpdateToOneWithWhereWithoutBookInput, publisherUpdateWithoutBookInput>, publisherUncheckedUpdateWithoutBookInput>
  }

  export type bookauthorUpdateManyWithoutBookNestedInput = {
    create?: XOR<bookauthorCreateWithoutBookInput, bookauthorUncheckedCreateWithoutBookInput> | bookauthorCreateWithoutBookInput[] | bookauthorUncheckedCreateWithoutBookInput[]
    connectOrCreate?: bookauthorCreateOrConnectWithoutBookInput | bookauthorCreateOrConnectWithoutBookInput[]
    upsert?: bookauthorUpsertWithWhereUniqueWithoutBookInput | bookauthorUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: bookauthorCreateManyBookInputEnvelope
    set?: bookauthorWhereUniqueInput | bookauthorWhereUniqueInput[]
    disconnect?: bookauthorWhereUniqueInput | bookauthorWhereUniqueInput[]
    delete?: bookauthorWhereUniqueInput | bookauthorWhereUniqueInput[]
    connect?: bookauthorWhereUniqueInput | bookauthorWhereUniqueInput[]
    update?: bookauthorUpdateWithWhereUniqueWithoutBookInput | bookauthorUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: bookauthorUpdateManyWithWhereWithoutBookInput | bookauthorUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: bookauthorScalarWhereInput | bookauthorScalarWhereInput[]
  }

  export type copyUpdateManyWithoutBookNestedInput = {
    create?: XOR<copyCreateWithoutBookInput, copyUncheckedCreateWithoutBookInput> | copyCreateWithoutBookInput[] | copyUncheckedCreateWithoutBookInput[]
    connectOrCreate?: copyCreateOrConnectWithoutBookInput | copyCreateOrConnectWithoutBookInput[]
    upsert?: copyUpsertWithWhereUniqueWithoutBookInput | copyUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: copyCreateManyBookInputEnvelope
    set?: copyWhereUniqueInput | copyWhereUniqueInput[]
    disconnect?: copyWhereUniqueInput | copyWhereUniqueInput[]
    delete?: copyWhereUniqueInput | copyWhereUniqueInput[]
    connect?: copyWhereUniqueInput | copyWhereUniqueInput[]
    update?: copyUpdateWithWhereUniqueWithoutBookInput | copyUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: copyUpdateManyWithWhereWithoutBookInput | copyUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: copyScalarWhereInput | copyScalarWhereInput[]
  }

  export type reviewUpdateManyWithoutBookNestedInput = {
    create?: XOR<reviewCreateWithoutBookInput, reviewUncheckedCreateWithoutBookInput> | reviewCreateWithoutBookInput[] | reviewUncheckedCreateWithoutBookInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutBookInput | reviewCreateOrConnectWithoutBookInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutBookInput | reviewUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: reviewCreateManyBookInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutBookInput | reviewUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutBookInput | reviewUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type bookauthorUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<bookauthorCreateWithoutBookInput, bookauthorUncheckedCreateWithoutBookInput> | bookauthorCreateWithoutBookInput[] | bookauthorUncheckedCreateWithoutBookInput[]
    connectOrCreate?: bookauthorCreateOrConnectWithoutBookInput | bookauthorCreateOrConnectWithoutBookInput[]
    upsert?: bookauthorUpsertWithWhereUniqueWithoutBookInput | bookauthorUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: bookauthorCreateManyBookInputEnvelope
    set?: bookauthorWhereUniqueInput | bookauthorWhereUniqueInput[]
    disconnect?: bookauthorWhereUniqueInput | bookauthorWhereUniqueInput[]
    delete?: bookauthorWhereUniqueInput | bookauthorWhereUniqueInput[]
    connect?: bookauthorWhereUniqueInput | bookauthorWhereUniqueInput[]
    update?: bookauthorUpdateWithWhereUniqueWithoutBookInput | bookauthorUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: bookauthorUpdateManyWithWhereWithoutBookInput | bookauthorUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: bookauthorScalarWhereInput | bookauthorScalarWhereInput[]
  }

  export type copyUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<copyCreateWithoutBookInput, copyUncheckedCreateWithoutBookInput> | copyCreateWithoutBookInput[] | copyUncheckedCreateWithoutBookInput[]
    connectOrCreate?: copyCreateOrConnectWithoutBookInput | copyCreateOrConnectWithoutBookInput[]
    upsert?: copyUpsertWithWhereUniqueWithoutBookInput | copyUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: copyCreateManyBookInputEnvelope
    set?: copyWhereUniqueInput | copyWhereUniqueInput[]
    disconnect?: copyWhereUniqueInput | copyWhereUniqueInput[]
    delete?: copyWhereUniqueInput | copyWhereUniqueInput[]
    connect?: copyWhereUniqueInput | copyWhereUniqueInput[]
    update?: copyUpdateWithWhereUniqueWithoutBookInput | copyUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: copyUpdateManyWithWhereWithoutBookInput | copyUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: copyScalarWhereInput | copyScalarWhereInput[]
  }

  export type reviewUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<reviewCreateWithoutBookInput, reviewUncheckedCreateWithoutBookInput> | reviewCreateWithoutBookInput[] | reviewUncheckedCreateWithoutBookInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutBookInput | reviewCreateOrConnectWithoutBookInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutBookInput | reviewUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: reviewCreateManyBookInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutBookInput | reviewUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutBookInput | reviewUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type authorCreateNestedOneWithoutBookauthorInput = {
    create?: XOR<authorCreateWithoutBookauthorInput, authorUncheckedCreateWithoutBookauthorInput>
    connectOrCreate?: authorCreateOrConnectWithoutBookauthorInput
    connect?: authorWhereUniqueInput
  }

  export type bookCreateNestedOneWithoutBookauthorInput = {
    create?: XOR<bookCreateWithoutBookauthorInput, bookUncheckedCreateWithoutBookauthorInput>
    connectOrCreate?: bookCreateOrConnectWithoutBookauthorInput
    connect?: bookWhereUniqueInput
  }

  export type authorUpdateOneRequiredWithoutBookauthorNestedInput = {
    create?: XOR<authorCreateWithoutBookauthorInput, authorUncheckedCreateWithoutBookauthorInput>
    connectOrCreate?: authorCreateOrConnectWithoutBookauthorInput
    upsert?: authorUpsertWithoutBookauthorInput
    connect?: authorWhereUniqueInput
    update?: XOR<XOR<authorUpdateToOneWithWhereWithoutBookauthorInput, authorUpdateWithoutBookauthorInput>, authorUncheckedUpdateWithoutBookauthorInput>
  }

  export type bookUpdateOneRequiredWithoutBookauthorNestedInput = {
    create?: XOR<bookCreateWithoutBookauthorInput, bookUncheckedCreateWithoutBookauthorInput>
    connectOrCreate?: bookCreateOrConnectWithoutBookauthorInput
    upsert?: bookUpsertWithoutBookauthorInput
    connect?: bookWhereUniqueInput
    update?: XOR<XOR<bookUpdateToOneWithWhereWithoutBookauthorInput, bookUpdateWithoutBookauthorInput>, bookUncheckedUpdateWithoutBookauthorInput>
  }

  export type bookCreateNestedOneWithoutCopyInput = {
    create?: XOR<bookCreateWithoutCopyInput, bookUncheckedCreateWithoutCopyInput>
    connectOrCreate?: bookCreateOrConnectWithoutCopyInput
    connect?: bookWhereUniqueInput
  }

  export type loanCreateNestedManyWithoutCopyInput = {
    create?: XOR<loanCreateWithoutCopyInput, loanUncheckedCreateWithoutCopyInput> | loanCreateWithoutCopyInput[] | loanUncheckedCreateWithoutCopyInput[]
    connectOrCreate?: loanCreateOrConnectWithoutCopyInput | loanCreateOrConnectWithoutCopyInput[]
    createMany?: loanCreateManyCopyInputEnvelope
    connect?: loanWhereUniqueInput | loanWhereUniqueInput[]
  }

  export type loanUncheckedCreateNestedManyWithoutCopyInput = {
    create?: XOR<loanCreateWithoutCopyInput, loanUncheckedCreateWithoutCopyInput> | loanCreateWithoutCopyInput[] | loanUncheckedCreateWithoutCopyInput[]
    connectOrCreate?: loanCreateOrConnectWithoutCopyInput | loanCreateOrConnectWithoutCopyInput[]
    createMany?: loanCreateManyCopyInputEnvelope
    connect?: loanWhereUniqueInput | loanWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type bookUpdateOneWithoutCopyNestedInput = {
    create?: XOR<bookCreateWithoutCopyInput, bookUncheckedCreateWithoutCopyInput>
    connectOrCreate?: bookCreateOrConnectWithoutCopyInput
    upsert?: bookUpsertWithoutCopyInput
    disconnect?: bookWhereInput | boolean
    delete?: bookWhereInput | boolean
    connect?: bookWhereUniqueInput
    update?: XOR<XOR<bookUpdateToOneWithWhereWithoutCopyInput, bookUpdateWithoutCopyInput>, bookUncheckedUpdateWithoutCopyInput>
  }

  export type loanUpdateManyWithoutCopyNestedInput = {
    create?: XOR<loanCreateWithoutCopyInput, loanUncheckedCreateWithoutCopyInput> | loanCreateWithoutCopyInput[] | loanUncheckedCreateWithoutCopyInput[]
    connectOrCreate?: loanCreateOrConnectWithoutCopyInput | loanCreateOrConnectWithoutCopyInput[]
    upsert?: loanUpsertWithWhereUniqueWithoutCopyInput | loanUpsertWithWhereUniqueWithoutCopyInput[]
    createMany?: loanCreateManyCopyInputEnvelope
    set?: loanWhereUniqueInput | loanWhereUniqueInput[]
    disconnect?: loanWhereUniqueInput | loanWhereUniqueInput[]
    delete?: loanWhereUniqueInput | loanWhereUniqueInput[]
    connect?: loanWhereUniqueInput | loanWhereUniqueInput[]
    update?: loanUpdateWithWhereUniqueWithoutCopyInput | loanUpdateWithWhereUniqueWithoutCopyInput[]
    updateMany?: loanUpdateManyWithWhereWithoutCopyInput | loanUpdateManyWithWhereWithoutCopyInput[]
    deleteMany?: loanScalarWhereInput | loanScalarWhereInput[]
  }

  export type loanUncheckedUpdateManyWithoutCopyNestedInput = {
    create?: XOR<loanCreateWithoutCopyInput, loanUncheckedCreateWithoutCopyInput> | loanCreateWithoutCopyInput[] | loanUncheckedCreateWithoutCopyInput[]
    connectOrCreate?: loanCreateOrConnectWithoutCopyInput | loanCreateOrConnectWithoutCopyInput[]
    upsert?: loanUpsertWithWhereUniqueWithoutCopyInput | loanUpsertWithWhereUniqueWithoutCopyInput[]
    createMany?: loanCreateManyCopyInputEnvelope
    set?: loanWhereUniqueInput | loanWhereUniqueInput[]
    disconnect?: loanWhereUniqueInput | loanWhereUniqueInput[]
    delete?: loanWhereUniqueInput | loanWhereUniqueInput[]
    connect?: loanWhereUniqueInput | loanWhereUniqueInput[]
    update?: loanUpdateWithWhereUniqueWithoutCopyInput | loanUpdateWithWhereUniqueWithoutCopyInput[]
    updateMany?: loanUpdateManyWithWhereWithoutCopyInput | loanUpdateManyWithWhereWithoutCopyInput[]
    deleteMany?: loanScalarWhereInput | loanScalarWhereInput[]
  }

  export type loanCreateNestedOneWithoutFineInput = {
    create?: XOR<loanCreateWithoutFineInput, loanUncheckedCreateWithoutFineInput>
    connectOrCreate?: loanCreateOrConnectWithoutFineInput
    connect?: loanWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type loanUpdateOneWithoutFineNestedInput = {
    create?: XOR<loanCreateWithoutFineInput, loanUncheckedCreateWithoutFineInput>
    connectOrCreate?: loanCreateOrConnectWithoutFineInput
    upsert?: loanUpsertWithoutFineInput
    disconnect?: loanWhereInput | boolean
    delete?: loanWhereInput | boolean
    connect?: loanWhereUniqueInput
    update?: XOR<XOR<loanUpdateToOneWithWhereWithoutFineInput, loanUpdateWithoutFineInput>, loanUncheckedUpdateWithoutFineInput>
  }

  export type fineCreateNestedManyWithoutLoanInput = {
    create?: XOR<fineCreateWithoutLoanInput, fineUncheckedCreateWithoutLoanInput> | fineCreateWithoutLoanInput[] | fineUncheckedCreateWithoutLoanInput[]
    connectOrCreate?: fineCreateOrConnectWithoutLoanInput | fineCreateOrConnectWithoutLoanInput[]
    createMany?: fineCreateManyLoanInputEnvelope
    connect?: fineWhereUniqueInput | fineWhereUniqueInput[]
  }

  export type copyCreateNestedOneWithoutLoanInput = {
    create?: XOR<copyCreateWithoutLoanInput, copyUncheckedCreateWithoutLoanInput>
    connectOrCreate?: copyCreateOrConnectWithoutLoanInput
    connect?: copyWhereUniqueInput
  }

  export type memberCreateNestedOneWithoutLoanInput = {
    create?: XOR<memberCreateWithoutLoanInput, memberUncheckedCreateWithoutLoanInput>
    connectOrCreate?: memberCreateOrConnectWithoutLoanInput
    connect?: memberWhereUniqueInput
  }

  export type fineUncheckedCreateNestedManyWithoutLoanInput = {
    create?: XOR<fineCreateWithoutLoanInput, fineUncheckedCreateWithoutLoanInput> | fineCreateWithoutLoanInput[] | fineUncheckedCreateWithoutLoanInput[]
    connectOrCreate?: fineCreateOrConnectWithoutLoanInput | fineCreateOrConnectWithoutLoanInput[]
    createMany?: fineCreateManyLoanInputEnvelope
    connect?: fineWhereUniqueInput | fineWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type fineUpdateManyWithoutLoanNestedInput = {
    create?: XOR<fineCreateWithoutLoanInput, fineUncheckedCreateWithoutLoanInput> | fineCreateWithoutLoanInput[] | fineUncheckedCreateWithoutLoanInput[]
    connectOrCreate?: fineCreateOrConnectWithoutLoanInput | fineCreateOrConnectWithoutLoanInput[]
    upsert?: fineUpsertWithWhereUniqueWithoutLoanInput | fineUpsertWithWhereUniqueWithoutLoanInput[]
    createMany?: fineCreateManyLoanInputEnvelope
    set?: fineWhereUniqueInput | fineWhereUniqueInput[]
    disconnect?: fineWhereUniqueInput | fineWhereUniqueInput[]
    delete?: fineWhereUniqueInput | fineWhereUniqueInput[]
    connect?: fineWhereUniqueInput | fineWhereUniqueInput[]
    update?: fineUpdateWithWhereUniqueWithoutLoanInput | fineUpdateWithWhereUniqueWithoutLoanInput[]
    updateMany?: fineUpdateManyWithWhereWithoutLoanInput | fineUpdateManyWithWhereWithoutLoanInput[]
    deleteMany?: fineScalarWhereInput | fineScalarWhereInput[]
  }

  export type copyUpdateOneWithoutLoanNestedInput = {
    create?: XOR<copyCreateWithoutLoanInput, copyUncheckedCreateWithoutLoanInput>
    connectOrCreate?: copyCreateOrConnectWithoutLoanInput
    upsert?: copyUpsertWithoutLoanInput
    disconnect?: copyWhereInput | boolean
    delete?: copyWhereInput | boolean
    connect?: copyWhereUniqueInput
    update?: XOR<XOR<copyUpdateToOneWithWhereWithoutLoanInput, copyUpdateWithoutLoanInput>, copyUncheckedUpdateWithoutLoanInput>
  }

  export type memberUpdateOneWithoutLoanNestedInput = {
    create?: XOR<memberCreateWithoutLoanInput, memberUncheckedCreateWithoutLoanInput>
    connectOrCreate?: memberCreateOrConnectWithoutLoanInput
    upsert?: memberUpsertWithoutLoanInput
    disconnect?: memberWhereInput | boolean
    delete?: memberWhereInput | boolean
    connect?: memberWhereUniqueInput
    update?: XOR<XOR<memberUpdateToOneWithWhereWithoutLoanInput, memberUpdateWithoutLoanInput>, memberUncheckedUpdateWithoutLoanInput>
  }

  export type fineUncheckedUpdateManyWithoutLoanNestedInput = {
    create?: XOR<fineCreateWithoutLoanInput, fineUncheckedCreateWithoutLoanInput> | fineCreateWithoutLoanInput[] | fineUncheckedCreateWithoutLoanInput[]
    connectOrCreate?: fineCreateOrConnectWithoutLoanInput | fineCreateOrConnectWithoutLoanInput[]
    upsert?: fineUpsertWithWhereUniqueWithoutLoanInput | fineUpsertWithWhereUniqueWithoutLoanInput[]
    createMany?: fineCreateManyLoanInputEnvelope
    set?: fineWhereUniqueInput | fineWhereUniqueInput[]
    disconnect?: fineWhereUniqueInput | fineWhereUniqueInput[]
    delete?: fineWhereUniqueInput | fineWhereUniqueInput[]
    connect?: fineWhereUniqueInput | fineWhereUniqueInput[]
    update?: fineUpdateWithWhereUniqueWithoutLoanInput | fineUpdateWithWhereUniqueWithoutLoanInput[]
    updateMany?: fineUpdateManyWithWhereWithoutLoanInput | fineUpdateManyWithWhereWithoutLoanInput[]
    deleteMany?: fineScalarWhereInput | fineScalarWhereInput[]
  }

  export type loanCreateNestedManyWithoutMemberInput = {
    create?: XOR<loanCreateWithoutMemberInput, loanUncheckedCreateWithoutMemberInput> | loanCreateWithoutMemberInput[] | loanUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: loanCreateOrConnectWithoutMemberInput | loanCreateOrConnectWithoutMemberInput[]
    createMany?: loanCreateManyMemberInputEnvelope
    connect?: loanWhereUniqueInput | loanWhereUniqueInput[]
  }

  export type loanUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<loanCreateWithoutMemberInput, loanUncheckedCreateWithoutMemberInput> | loanCreateWithoutMemberInput[] | loanUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: loanCreateOrConnectWithoutMemberInput | loanCreateOrConnectWithoutMemberInput[]
    createMany?: loanCreateManyMemberInputEnvelope
    connect?: loanWhereUniqueInput | loanWhereUniqueInput[]
  }

  export type loanUpdateManyWithoutMemberNestedInput = {
    create?: XOR<loanCreateWithoutMemberInput, loanUncheckedCreateWithoutMemberInput> | loanCreateWithoutMemberInput[] | loanUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: loanCreateOrConnectWithoutMemberInput | loanCreateOrConnectWithoutMemberInput[]
    upsert?: loanUpsertWithWhereUniqueWithoutMemberInput | loanUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: loanCreateManyMemberInputEnvelope
    set?: loanWhereUniqueInput | loanWhereUniqueInput[]
    disconnect?: loanWhereUniqueInput | loanWhereUniqueInput[]
    delete?: loanWhereUniqueInput | loanWhereUniqueInput[]
    connect?: loanWhereUniqueInput | loanWhereUniqueInput[]
    update?: loanUpdateWithWhereUniqueWithoutMemberInput | loanUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: loanUpdateManyWithWhereWithoutMemberInput | loanUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: loanScalarWhereInput | loanScalarWhereInput[]
  }

  export type loanUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<loanCreateWithoutMemberInput, loanUncheckedCreateWithoutMemberInput> | loanCreateWithoutMemberInput[] | loanUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: loanCreateOrConnectWithoutMemberInput | loanCreateOrConnectWithoutMemberInput[]
    upsert?: loanUpsertWithWhereUniqueWithoutMemberInput | loanUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: loanCreateManyMemberInputEnvelope
    set?: loanWhereUniqueInput | loanWhereUniqueInput[]
    disconnect?: loanWhereUniqueInput | loanWhereUniqueInput[]
    delete?: loanWhereUniqueInput | loanWhereUniqueInput[]
    connect?: loanWhereUniqueInput | loanWhereUniqueInput[]
    update?: loanUpdateWithWhereUniqueWithoutMemberInput | loanUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: loanUpdateManyWithWhereWithoutMemberInput | loanUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: loanScalarWhereInput | loanScalarWhereInput[]
  }

  export type bookCreateNestedManyWithoutPublisherInput = {
    create?: XOR<bookCreateWithoutPublisherInput, bookUncheckedCreateWithoutPublisherInput> | bookCreateWithoutPublisherInput[] | bookUncheckedCreateWithoutPublisherInput[]
    connectOrCreate?: bookCreateOrConnectWithoutPublisherInput | bookCreateOrConnectWithoutPublisherInput[]
    createMany?: bookCreateManyPublisherInputEnvelope
    connect?: bookWhereUniqueInput | bookWhereUniqueInput[]
  }

  export type bookUncheckedCreateNestedManyWithoutPublisherInput = {
    create?: XOR<bookCreateWithoutPublisherInput, bookUncheckedCreateWithoutPublisherInput> | bookCreateWithoutPublisherInput[] | bookUncheckedCreateWithoutPublisherInput[]
    connectOrCreate?: bookCreateOrConnectWithoutPublisherInput | bookCreateOrConnectWithoutPublisherInput[]
    createMany?: bookCreateManyPublisherInputEnvelope
    connect?: bookWhereUniqueInput | bookWhereUniqueInput[]
  }

  export type bookUpdateManyWithoutPublisherNestedInput = {
    create?: XOR<bookCreateWithoutPublisherInput, bookUncheckedCreateWithoutPublisherInput> | bookCreateWithoutPublisherInput[] | bookUncheckedCreateWithoutPublisherInput[]
    connectOrCreate?: bookCreateOrConnectWithoutPublisherInput | bookCreateOrConnectWithoutPublisherInput[]
    upsert?: bookUpsertWithWhereUniqueWithoutPublisherInput | bookUpsertWithWhereUniqueWithoutPublisherInput[]
    createMany?: bookCreateManyPublisherInputEnvelope
    set?: bookWhereUniqueInput | bookWhereUniqueInput[]
    disconnect?: bookWhereUniqueInput | bookWhereUniqueInput[]
    delete?: bookWhereUniqueInput | bookWhereUniqueInput[]
    connect?: bookWhereUniqueInput | bookWhereUniqueInput[]
    update?: bookUpdateWithWhereUniqueWithoutPublisherInput | bookUpdateWithWhereUniqueWithoutPublisherInput[]
    updateMany?: bookUpdateManyWithWhereWithoutPublisherInput | bookUpdateManyWithWhereWithoutPublisherInput[]
    deleteMany?: bookScalarWhereInput | bookScalarWhereInput[]
  }

  export type bookUncheckedUpdateManyWithoutPublisherNestedInput = {
    create?: XOR<bookCreateWithoutPublisherInput, bookUncheckedCreateWithoutPublisherInput> | bookCreateWithoutPublisherInput[] | bookUncheckedCreateWithoutPublisherInput[]
    connectOrCreate?: bookCreateOrConnectWithoutPublisherInput | bookCreateOrConnectWithoutPublisherInput[]
    upsert?: bookUpsertWithWhereUniqueWithoutPublisherInput | bookUpsertWithWhereUniqueWithoutPublisherInput[]
    createMany?: bookCreateManyPublisherInputEnvelope
    set?: bookWhereUniqueInput | bookWhereUniqueInput[]
    disconnect?: bookWhereUniqueInput | bookWhereUniqueInput[]
    delete?: bookWhereUniqueInput | bookWhereUniqueInput[]
    connect?: bookWhereUniqueInput | bookWhereUniqueInput[]
    update?: bookUpdateWithWhereUniqueWithoutPublisherInput | bookUpdateWithWhereUniqueWithoutPublisherInput[]
    updateMany?: bookUpdateManyWithWhereWithoutPublisherInput | bookUpdateManyWithWhereWithoutPublisherInput[]
    deleteMany?: bookScalarWhereInput | bookScalarWhereInput[]
  }

  export type bookCreateNestedOneWithoutReviewInput = {
    create?: XOR<bookCreateWithoutReviewInput, bookUncheckedCreateWithoutReviewInput>
    connectOrCreate?: bookCreateOrConnectWithoutReviewInput
    connect?: bookWhereUniqueInput
  }

  export type bookUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<bookCreateWithoutReviewInput, bookUncheckedCreateWithoutReviewInput>
    connectOrCreate?: bookCreateOrConnectWithoutReviewInput
    upsert?: bookUpsertWithoutReviewInput
    connect?: bookWhereUniqueInput
    update?: XOR<XOR<bookUpdateToOneWithWhereWithoutReviewInput, bookUpdateWithoutReviewInput>, bookUncheckedUpdateWithoutReviewInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type bookauthorCreateWithoutAuthorInput = {
    book: bookCreateNestedOneWithoutBookauthorInput
  }

  export type bookauthorUncheckedCreateWithoutAuthorInput = {
    book_id: number
  }

  export type bookauthorCreateOrConnectWithoutAuthorInput = {
    where: bookauthorWhereUniqueInput
    create: XOR<bookauthorCreateWithoutAuthorInput, bookauthorUncheckedCreateWithoutAuthorInput>
  }

  export type bookauthorCreateManyAuthorInputEnvelope = {
    data: bookauthorCreateManyAuthorInput | bookauthorCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type bookauthorUpsertWithWhereUniqueWithoutAuthorInput = {
    where: bookauthorWhereUniqueInput
    update: XOR<bookauthorUpdateWithoutAuthorInput, bookauthorUncheckedUpdateWithoutAuthorInput>
    create: XOR<bookauthorCreateWithoutAuthorInput, bookauthorUncheckedCreateWithoutAuthorInput>
  }

  export type bookauthorUpdateWithWhereUniqueWithoutAuthorInput = {
    where: bookauthorWhereUniqueInput
    data: XOR<bookauthorUpdateWithoutAuthorInput, bookauthorUncheckedUpdateWithoutAuthorInput>
  }

  export type bookauthorUpdateManyWithWhereWithoutAuthorInput = {
    where: bookauthorScalarWhereInput
    data: XOR<bookauthorUpdateManyMutationInput, bookauthorUncheckedUpdateManyWithoutAuthorInput>
  }

  export type bookauthorScalarWhereInput = {
    AND?: bookauthorScalarWhereInput | bookauthorScalarWhereInput[]
    OR?: bookauthorScalarWhereInput[]
    NOT?: bookauthorScalarWhereInput | bookauthorScalarWhereInput[]
    book_id?: IntFilter<"bookauthor"> | number
    author_id?: IntFilter<"bookauthor"> | number
  }

  export type publisherCreateWithoutBookInput = {
    name_and_surname: string
    address?: string | null
    phone?: string | null
  }

  export type publisherUncheckedCreateWithoutBookInput = {
    publisher_id?: number
    name_and_surname: string
    address?: string | null
    phone?: string | null
  }

  export type publisherCreateOrConnectWithoutBookInput = {
    where: publisherWhereUniqueInput
    create: XOR<publisherCreateWithoutBookInput, publisherUncheckedCreateWithoutBookInput>
  }

  export type bookauthorCreateWithoutBookInput = {
    author: authorCreateNestedOneWithoutBookauthorInput
  }

  export type bookauthorUncheckedCreateWithoutBookInput = {
    author_id: number
  }

  export type bookauthorCreateOrConnectWithoutBookInput = {
    where: bookauthorWhereUniqueInput
    create: XOR<bookauthorCreateWithoutBookInput, bookauthorUncheckedCreateWithoutBookInput>
  }

  export type bookauthorCreateManyBookInputEnvelope = {
    data: bookauthorCreateManyBookInput | bookauthorCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type copyCreateWithoutBookInput = {
    condition?: string | null
    is_availible?: boolean | null
    loan?: loanCreateNestedManyWithoutCopyInput
  }

  export type copyUncheckedCreateWithoutBookInput = {
    copy_id?: number
    condition?: string | null
    is_availible?: boolean | null
    loan?: loanUncheckedCreateNestedManyWithoutCopyInput
  }

  export type copyCreateOrConnectWithoutBookInput = {
    where: copyWhereUniqueInput
    create: XOR<copyCreateWithoutBookInput, copyUncheckedCreateWithoutBookInput>
  }

  export type copyCreateManyBookInputEnvelope = {
    data: copyCreateManyBookInput | copyCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type reviewCreateWithoutBookInput = {
    rating: number
    comment?: string | null
  }

  export type reviewUncheckedCreateWithoutBookInput = {
    id?: number
    rating: number
    comment?: string | null
  }

  export type reviewCreateOrConnectWithoutBookInput = {
    where: reviewWhereUniqueInput
    create: XOR<reviewCreateWithoutBookInput, reviewUncheckedCreateWithoutBookInput>
  }

  export type reviewCreateManyBookInputEnvelope = {
    data: reviewCreateManyBookInput | reviewCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type publisherUpsertWithoutBookInput = {
    update: XOR<publisherUpdateWithoutBookInput, publisherUncheckedUpdateWithoutBookInput>
    create: XOR<publisherCreateWithoutBookInput, publisherUncheckedCreateWithoutBookInput>
    where?: publisherWhereInput
  }

  export type publisherUpdateToOneWithWhereWithoutBookInput = {
    where?: publisherWhereInput
    data: XOR<publisherUpdateWithoutBookInput, publisherUncheckedUpdateWithoutBookInput>
  }

  export type publisherUpdateWithoutBookInput = {
    name_and_surname?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type publisherUncheckedUpdateWithoutBookInput = {
    publisher_id?: IntFieldUpdateOperationsInput | number
    name_and_surname?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type bookauthorUpsertWithWhereUniqueWithoutBookInput = {
    where: bookauthorWhereUniqueInput
    update: XOR<bookauthorUpdateWithoutBookInput, bookauthorUncheckedUpdateWithoutBookInput>
    create: XOR<bookauthorCreateWithoutBookInput, bookauthorUncheckedCreateWithoutBookInput>
  }

  export type bookauthorUpdateWithWhereUniqueWithoutBookInput = {
    where: bookauthorWhereUniqueInput
    data: XOR<bookauthorUpdateWithoutBookInput, bookauthorUncheckedUpdateWithoutBookInput>
  }

  export type bookauthorUpdateManyWithWhereWithoutBookInput = {
    where: bookauthorScalarWhereInput
    data: XOR<bookauthorUpdateManyMutationInput, bookauthorUncheckedUpdateManyWithoutBookInput>
  }

  export type copyUpsertWithWhereUniqueWithoutBookInput = {
    where: copyWhereUniqueInput
    update: XOR<copyUpdateWithoutBookInput, copyUncheckedUpdateWithoutBookInput>
    create: XOR<copyCreateWithoutBookInput, copyUncheckedCreateWithoutBookInput>
  }

  export type copyUpdateWithWhereUniqueWithoutBookInput = {
    where: copyWhereUniqueInput
    data: XOR<copyUpdateWithoutBookInput, copyUncheckedUpdateWithoutBookInput>
  }

  export type copyUpdateManyWithWhereWithoutBookInput = {
    where: copyScalarWhereInput
    data: XOR<copyUpdateManyMutationInput, copyUncheckedUpdateManyWithoutBookInput>
  }

  export type copyScalarWhereInput = {
    AND?: copyScalarWhereInput | copyScalarWhereInput[]
    OR?: copyScalarWhereInput[]
    NOT?: copyScalarWhereInput | copyScalarWhereInput[]
    copy_id?: IntFilter<"copy"> | number
    book_id?: IntNullableFilter<"copy"> | number | null
    condition?: StringNullableFilter<"copy"> | string | null
    is_availible?: BoolNullableFilter<"copy"> | boolean | null
  }

  export type reviewUpsertWithWhereUniqueWithoutBookInput = {
    where: reviewWhereUniqueInput
    update: XOR<reviewUpdateWithoutBookInput, reviewUncheckedUpdateWithoutBookInput>
    create: XOR<reviewCreateWithoutBookInput, reviewUncheckedCreateWithoutBookInput>
  }

  export type reviewUpdateWithWhereUniqueWithoutBookInput = {
    where: reviewWhereUniqueInput
    data: XOR<reviewUpdateWithoutBookInput, reviewUncheckedUpdateWithoutBookInput>
  }

  export type reviewUpdateManyWithWhereWithoutBookInput = {
    where: reviewScalarWhereInput
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutBookInput>
  }

  export type reviewScalarWhereInput = {
    AND?: reviewScalarWhereInput | reviewScalarWhereInput[]
    OR?: reviewScalarWhereInput[]
    NOT?: reviewScalarWhereInput | reviewScalarWhereInput[]
    id?: IntFilter<"review"> | number
    rating?: IntFilter<"review"> | number
    comment?: StringNullableFilter<"review"> | string | null
    book_id?: IntFilter<"review"> | number
  }

  export type authorCreateWithoutBookauthorInput = {
    full_name: string
    birth_date?: Date | string | null
  }

  export type authorUncheckedCreateWithoutBookauthorInput = {
    author_id?: number
    full_name: string
    birth_date?: Date | string | null
  }

  export type authorCreateOrConnectWithoutBookauthorInput = {
    where: authorWhereUniqueInput
    create: XOR<authorCreateWithoutBookauthorInput, authorUncheckedCreateWithoutBookauthorInput>
  }

  export type bookCreateWithoutBookauthorInput = {
    isbn: string
    title: string
    year_published?: number | null
    genre?: string | null
    publisher?: publisherCreateNestedOneWithoutBookInput
    copy?: copyCreateNestedManyWithoutBookInput
    review?: reviewCreateNestedManyWithoutBookInput
  }

  export type bookUncheckedCreateWithoutBookauthorInput = {
    book_id?: number
    isbn: string
    title: string
    year_published?: number | null
    genre?: string | null
    publisher_id?: number | null
    copy?: copyUncheckedCreateNestedManyWithoutBookInput
    review?: reviewUncheckedCreateNestedManyWithoutBookInput
  }

  export type bookCreateOrConnectWithoutBookauthorInput = {
    where: bookWhereUniqueInput
    create: XOR<bookCreateWithoutBookauthorInput, bookUncheckedCreateWithoutBookauthorInput>
  }

  export type authorUpsertWithoutBookauthorInput = {
    update: XOR<authorUpdateWithoutBookauthorInput, authorUncheckedUpdateWithoutBookauthorInput>
    create: XOR<authorCreateWithoutBookauthorInput, authorUncheckedCreateWithoutBookauthorInput>
    where?: authorWhereInput
  }

  export type authorUpdateToOneWithWhereWithoutBookauthorInput = {
    where?: authorWhereInput
    data: XOR<authorUpdateWithoutBookauthorInput, authorUncheckedUpdateWithoutBookauthorInput>
  }

  export type authorUpdateWithoutBookauthorInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type authorUncheckedUpdateWithoutBookauthorInput = {
    author_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type bookUpsertWithoutBookauthorInput = {
    update: XOR<bookUpdateWithoutBookauthorInput, bookUncheckedUpdateWithoutBookauthorInput>
    create: XOR<bookCreateWithoutBookauthorInput, bookUncheckedCreateWithoutBookauthorInput>
    where?: bookWhereInput
  }

  export type bookUpdateToOneWithWhereWithoutBookauthorInput = {
    where?: bookWhereInput
    data: XOR<bookUpdateWithoutBookauthorInput, bookUncheckedUpdateWithoutBookauthorInput>
  }

  export type bookUpdateWithoutBookauthorInput = {
    isbn?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    year_published?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: publisherUpdateOneWithoutBookNestedInput
    copy?: copyUpdateManyWithoutBookNestedInput
    review?: reviewUpdateManyWithoutBookNestedInput
  }

  export type bookUncheckedUpdateWithoutBookauthorInput = {
    book_id?: IntFieldUpdateOperationsInput | number
    isbn?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    year_published?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    publisher_id?: NullableIntFieldUpdateOperationsInput | number | null
    copy?: copyUncheckedUpdateManyWithoutBookNestedInput
    review?: reviewUncheckedUpdateManyWithoutBookNestedInput
  }

  export type bookCreateWithoutCopyInput = {
    isbn: string
    title: string
    year_published?: number | null
    genre?: string | null
    publisher?: publisherCreateNestedOneWithoutBookInput
    bookauthor?: bookauthorCreateNestedManyWithoutBookInput
    review?: reviewCreateNestedManyWithoutBookInput
  }

  export type bookUncheckedCreateWithoutCopyInput = {
    book_id?: number
    isbn: string
    title: string
    year_published?: number | null
    genre?: string | null
    publisher_id?: number | null
    bookauthor?: bookauthorUncheckedCreateNestedManyWithoutBookInput
    review?: reviewUncheckedCreateNestedManyWithoutBookInput
  }

  export type bookCreateOrConnectWithoutCopyInput = {
    where: bookWhereUniqueInput
    create: XOR<bookCreateWithoutCopyInput, bookUncheckedCreateWithoutCopyInput>
  }

  export type loanCreateWithoutCopyInput = {
    loan_date: Date | string
    due_date?: Date | string | null
    return_date?: Date | string | null
    fine?: fineCreateNestedManyWithoutLoanInput
    member?: memberCreateNestedOneWithoutLoanInput
  }

  export type loanUncheckedCreateWithoutCopyInput = {
    loan_id?: number
    member_id?: number | null
    loan_date: Date | string
    due_date?: Date | string | null
    return_date?: Date | string | null
    fine?: fineUncheckedCreateNestedManyWithoutLoanInput
  }

  export type loanCreateOrConnectWithoutCopyInput = {
    where: loanWhereUniqueInput
    create: XOR<loanCreateWithoutCopyInput, loanUncheckedCreateWithoutCopyInput>
  }

  export type loanCreateManyCopyInputEnvelope = {
    data: loanCreateManyCopyInput | loanCreateManyCopyInput[]
    skipDuplicates?: boolean
  }

  export type bookUpsertWithoutCopyInput = {
    update: XOR<bookUpdateWithoutCopyInput, bookUncheckedUpdateWithoutCopyInput>
    create: XOR<bookCreateWithoutCopyInput, bookUncheckedCreateWithoutCopyInput>
    where?: bookWhereInput
  }

  export type bookUpdateToOneWithWhereWithoutCopyInput = {
    where?: bookWhereInput
    data: XOR<bookUpdateWithoutCopyInput, bookUncheckedUpdateWithoutCopyInput>
  }

  export type bookUpdateWithoutCopyInput = {
    isbn?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    year_published?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: publisherUpdateOneWithoutBookNestedInput
    bookauthor?: bookauthorUpdateManyWithoutBookNestedInput
    review?: reviewUpdateManyWithoutBookNestedInput
  }

  export type bookUncheckedUpdateWithoutCopyInput = {
    book_id?: IntFieldUpdateOperationsInput | number
    isbn?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    year_published?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    publisher_id?: NullableIntFieldUpdateOperationsInput | number | null
    bookauthor?: bookauthorUncheckedUpdateManyWithoutBookNestedInput
    review?: reviewUncheckedUpdateManyWithoutBookNestedInput
  }

  export type loanUpsertWithWhereUniqueWithoutCopyInput = {
    where: loanWhereUniqueInput
    update: XOR<loanUpdateWithoutCopyInput, loanUncheckedUpdateWithoutCopyInput>
    create: XOR<loanCreateWithoutCopyInput, loanUncheckedCreateWithoutCopyInput>
  }

  export type loanUpdateWithWhereUniqueWithoutCopyInput = {
    where: loanWhereUniqueInput
    data: XOR<loanUpdateWithoutCopyInput, loanUncheckedUpdateWithoutCopyInput>
  }

  export type loanUpdateManyWithWhereWithoutCopyInput = {
    where: loanScalarWhereInput
    data: XOR<loanUpdateManyMutationInput, loanUncheckedUpdateManyWithoutCopyInput>
  }

  export type loanScalarWhereInput = {
    AND?: loanScalarWhereInput | loanScalarWhereInput[]
    OR?: loanScalarWhereInput[]
    NOT?: loanScalarWhereInput | loanScalarWhereInput[]
    loan_id?: IntFilter<"loan"> | number
    copy_id?: IntNullableFilter<"loan"> | number | null
    member_id?: IntNullableFilter<"loan"> | number | null
    loan_date?: DateTimeFilter<"loan"> | Date | string
    due_date?: DateTimeNullableFilter<"loan"> | Date | string | null
    return_date?: DateTimeNullableFilter<"loan"> | Date | string | null
  }

  export type loanCreateWithoutFineInput = {
    loan_date: Date | string
    due_date?: Date | string | null
    return_date?: Date | string | null
    copy?: copyCreateNestedOneWithoutLoanInput
    member?: memberCreateNestedOneWithoutLoanInput
  }

  export type loanUncheckedCreateWithoutFineInput = {
    loan_id?: number
    copy_id?: number | null
    member_id?: number | null
    loan_date: Date | string
    due_date?: Date | string | null
    return_date?: Date | string | null
  }

  export type loanCreateOrConnectWithoutFineInput = {
    where: loanWhereUniqueInput
    create: XOR<loanCreateWithoutFineInput, loanUncheckedCreateWithoutFineInput>
  }

  export type loanUpsertWithoutFineInput = {
    update: XOR<loanUpdateWithoutFineInput, loanUncheckedUpdateWithoutFineInput>
    create: XOR<loanCreateWithoutFineInput, loanUncheckedCreateWithoutFineInput>
    where?: loanWhereInput
  }

  export type loanUpdateToOneWithWhereWithoutFineInput = {
    where?: loanWhereInput
    data: XOR<loanUpdateWithoutFineInput, loanUncheckedUpdateWithoutFineInput>
  }

  export type loanUpdateWithoutFineInput = {
    loan_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    copy?: copyUpdateOneWithoutLoanNestedInput
    member?: memberUpdateOneWithoutLoanNestedInput
  }

  export type loanUncheckedUpdateWithoutFineInput = {
    loan_id?: IntFieldUpdateOperationsInput | number
    copy_id?: NullableIntFieldUpdateOperationsInput | number | null
    member_id?: NullableIntFieldUpdateOperationsInput | number | null
    loan_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type fineCreateWithoutLoanInput = {
    amount: Decimal | DecimalJsLike | number | string
  }

  export type fineUncheckedCreateWithoutLoanInput = {
    fine_id?: number
    amount: Decimal | DecimalJsLike | number | string
  }

  export type fineCreateOrConnectWithoutLoanInput = {
    where: fineWhereUniqueInput
    create: XOR<fineCreateWithoutLoanInput, fineUncheckedCreateWithoutLoanInput>
  }

  export type fineCreateManyLoanInputEnvelope = {
    data: fineCreateManyLoanInput | fineCreateManyLoanInput[]
    skipDuplicates?: boolean
  }

  export type copyCreateWithoutLoanInput = {
    condition?: string | null
    is_availible?: boolean | null
    book?: bookCreateNestedOneWithoutCopyInput
  }

  export type copyUncheckedCreateWithoutLoanInput = {
    copy_id?: number
    book_id?: number | null
    condition?: string | null
    is_availible?: boolean | null
  }

  export type copyCreateOrConnectWithoutLoanInput = {
    where: copyWhereUniqueInput
    create: XOR<copyCreateWithoutLoanInput, copyUncheckedCreateWithoutLoanInput>
  }

  export type memberCreateWithoutLoanInput = {
    full_name: string
    email: string
    phone?: string | null
    address?: string | null
    member_type?: string | null
    join_date?: Date | string | null
  }

  export type memberUncheckedCreateWithoutLoanInput = {
    member_id?: number
    full_name: string
    email: string
    phone?: string | null
    address?: string | null
    member_type?: string | null
    join_date?: Date | string | null
  }

  export type memberCreateOrConnectWithoutLoanInput = {
    where: memberWhereUniqueInput
    create: XOR<memberCreateWithoutLoanInput, memberUncheckedCreateWithoutLoanInput>
  }

  export type fineUpsertWithWhereUniqueWithoutLoanInput = {
    where: fineWhereUniqueInput
    update: XOR<fineUpdateWithoutLoanInput, fineUncheckedUpdateWithoutLoanInput>
    create: XOR<fineCreateWithoutLoanInput, fineUncheckedCreateWithoutLoanInput>
  }

  export type fineUpdateWithWhereUniqueWithoutLoanInput = {
    where: fineWhereUniqueInput
    data: XOR<fineUpdateWithoutLoanInput, fineUncheckedUpdateWithoutLoanInput>
  }

  export type fineUpdateManyWithWhereWithoutLoanInput = {
    where: fineScalarWhereInput
    data: XOR<fineUpdateManyMutationInput, fineUncheckedUpdateManyWithoutLoanInput>
  }

  export type fineScalarWhereInput = {
    AND?: fineScalarWhereInput | fineScalarWhereInput[]
    OR?: fineScalarWhereInput[]
    NOT?: fineScalarWhereInput | fineScalarWhereInput[]
    fine_id?: IntFilter<"fine"> | number
    loan_id?: IntNullableFilter<"fine"> | number | null
    amount?: DecimalFilter<"fine"> | Decimal | DecimalJsLike | number | string
  }

  export type copyUpsertWithoutLoanInput = {
    update: XOR<copyUpdateWithoutLoanInput, copyUncheckedUpdateWithoutLoanInput>
    create: XOR<copyCreateWithoutLoanInput, copyUncheckedCreateWithoutLoanInput>
    where?: copyWhereInput
  }

  export type copyUpdateToOneWithWhereWithoutLoanInput = {
    where?: copyWhereInput
    data: XOR<copyUpdateWithoutLoanInput, copyUncheckedUpdateWithoutLoanInput>
  }

  export type copyUpdateWithoutLoanInput = {
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    is_availible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    book?: bookUpdateOneWithoutCopyNestedInput
  }

  export type copyUncheckedUpdateWithoutLoanInput = {
    copy_id?: IntFieldUpdateOperationsInput | number
    book_id?: NullableIntFieldUpdateOperationsInput | number | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    is_availible?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type memberUpsertWithoutLoanInput = {
    update: XOR<memberUpdateWithoutLoanInput, memberUncheckedUpdateWithoutLoanInput>
    create: XOR<memberCreateWithoutLoanInput, memberUncheckedCreateWithoutLoanInput>
    where?: memberWhereInput
  }

  export type memberUpdateToOneWithWhereWithoutLoanInput = {
    where?: memberWhereInput
    data: XOR<memberUpdateWithoutLoanInput, memberUncheckedUpdateWithoutLoanInput>
  }

  export type memberUpdateWithoutLoanInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    member_type?: NullableStringFieldUpdateOperationsInput | string | null
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type memberUncheckedUpdateWithoutLoanInput = {
    member_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    member_type?: NullableStringFieldUpdateOperationsInput | string | null
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type loanCreateWithoutMemberInput = {
    loan_date: Date | string
    due_date?: Date | string | null
    return_date?: Date | string | null
    fine?: fineCreateNestedManyWithoutLoanInput
    copy?: copyCreateNestedOneWithoutLoanInput
  }

  export type loanUncheckedCreateWithoutMemberInput = {
    loan_id?: number
    copy_id?: number | null
    loan_date: Date | string
    due_date?: Date | string | null
    return_date?: Date | string | null
    fine?: fineUncheckedCreateNestedManyWithoutLoanInput
  }

  export type loanCreateOrConnectWithoutMemberInput = {
    where: loanWhereUniqueInput
    create: XOR<loanCreateWithoutMemberInput, loanUncheckedCreateWithoutMemberInput>
  }

  export type loanCreateManyMemberInputEnvelope = {
    data: loanCreateManyMemberInput | loanCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type loanUpsertWithWhereUniqueWithoutMemberInput = {
    where: loanWhereUniqueInput
    update: XOR<loanUpdateWithoutMemberInput, loanUncheckedUpdateWithoutMemberInput>
    create: XOR<loanCreateWithoutMemberInput, loanUncheckedCreateWithoutMemberInput>
  }

  export type loanUpdateWithWhereUniqueWithoutMemberInput = {
    where: loanWhereUniqueInput
    data: XOR<loanUpdateWithoutMemberInput, loanUncheckedUpdateWithoutMemberInput>
  }

  export type loanUpdateManyWithWhereWithoutMemberInput = {
    where: loanScalarWhereInput
    data: XOR<loanUpdateManyMutationInput, loanUncheckedUpdateManyWithoutMemberInput>
  }

  export type bookCreateWithoutPublisherInput = {
    isbn: string
    title: string
    year_published?: number | null
    genre?: string | null
    bookauthor?: bookauthorCreateNestedManyWithoutBookInput
    copy?: copyCreateNestedManyWithoutBookInput
    review?: reviewCreateNestedManyWithoutBookInput
  }

  export type bookUncheckedCreateWithoutPublisherInput = {
    book_id?: number
    isbn: string
    title: string
    year_published?: number | null
    genre?: string | null
    bookauthor?: bookauthorUncheckedCreateNestedManyWithoutBookInput
    copy?: copyUncheckedCreateNestedManyWithoutBookInput
    review?: reviewUncheckedCreateNestedManyWithoutBookInput
  }

  export type bookCreateOrConnectWithoutPublisherInput = {
    where: bookWhereUniqueInput
    create: XOR<bookCreateWithoutPublisherInput, bookUncheckedCreateWithoutPublisherInput>
  }

  export type bookCreateManyPublisherInputEnvelope = {
    data: bookCreateManyPublisherInput | bookCreateManyPublisherInput[]
    skipDuplicates?: boolean
  }

  export type bookUpsertWithWhereUniqueWithoutPublisherInput = {
    where: bookWhereUniqueInput
    update: XOR<bookUpdateWithoutPublisherInput, bookUncheckedUpdateWithoutPublisherInput>
    create: XOR<bookCreateWithoutPublisherInput, bookUncheckedCreateWithoutPublisherInput>
  }

  export type bookUpdateWithWhereUniqueWithoutPublisherInput = {
    where: bookWhereUniqueInput
    data: XOR<bookUpdateWithoutPublisherInput, bookUncheckedUpdateWithoutPublisherInput>
  }

  export type bookUpdateManyWithWhereWithoutPublisherInput = {
    where: bookScalarWhereInput
    data: XOR<bookUpdateManyMutationInput, bookUncheckedUpdateManyWithoutPublisherInput>
  }

  export type bookScalarWhereInput = {
    AND?: bookScalarWhereInput | bookScalarWhereInput[]
    OR?: bookScalarWhereInput[]
    NOT?: bookScalarWhereInput | bookScalarWhereInput[]
    book_id?: IntFilter<"book"> | number
    isbn?: StringFilter<"book"> | string
    title?: StringFilter<"book"> | string
    year_published?: IntNullableFilter<"book"> | number | null
    genre?: StringNullableFilter<"book"> | string | null
    publisher_id?: IntNullableFilter<"book"> | number | null
  }

  export type bookCreateWithoutReviewInput = {
    isbn: string
    title: string
    year_published?: number | null
    genre?: string | null
    publisher?: publisherCreateNestedOneWithoutBookInput
    bookauthor?: bookauthorCreateNestedManyWithoutBookInput
    copy?: copyCreateNestedManyWithoutBookInput
  }

  export type bookUncheckedCreateWithoutReviewInput = {
    book_id?: number
    isbn: string
    title: string
    year_published?: number | null
    genre?: string | null
    publisher_id?: number | null
    bookauthor?: bookauthorUncheckedCreateNestedManyWithoutBookInput
    copy?: copyUncheckedCreateNestedManyWithoutBookInput
  }

  export type bookCreateOrConnectWithoutReviewInput = {
    where: bookWhereUniqueInput
    create: XOR<bookCreateWithoutReviewInput, bookUncheckedCreateWithoutReviewInput>
  }

  export type bookUpsertWithoutReviewInput = {
    update: XOR<bookUpdateWithoutReviewInput, bookUncheckedUpdateWithoutReviewInput>
    create: XOR<bookCreateWithoutReviewInput, bookUncheckedCreateWithoutReviewInput>
    where?: bookWhereInput
  }

  export type bookUpdateToOneWithWhereWithoutReviewInput = {
    where?: bookWhereInput
    data: XOR<bookUpdateWithoutReviewInput, bookUncheckedUpdateWithoutReviewInput>
  }

  export type bookUpdateWithoutReviewInput = {
    isbn?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    year_published?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: publisherUpdateOneWithoutBookNestedInput
    bookauthor?: bookauthorUpdateManyWithoutBookNestedInput
    copy?: copyUpdateManyWithoutBookNestedInput
  }

  export type bookUncheckedUpdateWithoutReviewInput = {
    book_id?: IntFieldUpdateOperationsInput | number
    isbn?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    year_published?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    publisher_id?: NullableIntFieldUpdateOperationsInput | number | null
    bookauthor?: bookauthorUncheckedUpdateManyWithoutBookNestedInput
    copy?: copyUncheckedUpdateManyWithoutBookNestedInput
  }

  export type bookauthorCreateManyAuthorInput = {
    book_id: number
  }

  export type bookauthorUpdateWithoutAuthorInput = {
    book?: bookUpdateOneRequiredWithoutBookauthorNestedInput
  }

  export type bookauthorUncheckedUpdateWithoutAuthorInput = {
    book_id?: IntFieldUpdateOperationsInput | number
  }

  export type bookauthorUncheckedUpdateManyWithoutAuthorInput = {
    book_id?: IntFieldUpdateOperationsInput | number
  }

  export type bookauthorCreateManyBookInput = {
    author_id: number
  }

  export type copyCreateManyBookInput = {
    copy_id?: number
    condition?: string | null
    is_availible?: boolean | null
  }

  export type reviewCreateManyBookInput = {
    id?: number
    rating: number
    comment?: string | null
  }

  export type bookauthorUpdateWithoutBookInput = {
    author?: authorUpdateOneRequiredWithoutBookauthorNestedInput
  }

  export type bookauthorUncheckedUpdateWithoutBookInput = {
    author_id?: IntFieldUpdateOperationsInput | number
  }

  export type bookauthorUncheckedUpdateManyWithoutBookInput = {
    author_id?: IntFieldUpdateOperationsInput | number
  }

  export type copyUpdateWithoutBookInput = {
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    is_availible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    loan?: loanUpdateManyWithoutCopyNestedInput
  }

  export type copyUncheckedUpdateWithoutBookInput = {
    copy_id?: IntFieldUpdateOperationsInput | number
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    is_availible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    loan?: loanUncheckedUpdateManyWithoutCopyNestedInput
  }

  export type copyUncheckedUpdateManyWithoutBookInput = {
    copy_id?: IntFieldUpdateOperationsInput | number
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    is_availible?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type reviewUpdateWithoutBookInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reviewUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reviewUncheckedUpdateManyWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type loanCreateManyCopyInput = {
    loan_id?: number
    member_id?: number | null
    loan_date: Date | string
    due_date?: Date | string | null
    return_date?: Date | string | null
  }

  export type loanUpdateWithoutCopyInput = {
    loan_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fine?: fineUpdateManyWithoutLoanNestedInput
    member?: memberUpdateOneWithoutLoanNestedInput
  }

  export type loanUncheckedUpdateWithoutCopyInput = {
    loan_id?: IntFieldUpdateOperationsInput | number
    member_id?: NullableIntFieldUpdateOperationsInput | number | null
    loan_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fine?: fineUncheckedUpdateManyWithoutLoanNestedInput
  }

  export type loanUncheckedUpdateManyWithoutCopyInput = {
    loan_id?: IntFieldUpdateOperationsInput | number
    member_id?: NullableIntFieldUpdateOperationsInput | number | null
    loan_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type fineCreateManyLoanInput = {
    fine_id?: number
    amount: Decimal | DecimalJsLike | number | string
  }

  export type fineUpdateWithoutLoanInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type fineUncheckedUpdateWithoutLoanInput = {
    fine_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type fineUncheckedUpdateManyWithoutLoanInput = {
    fine_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type loanCreateManyMemberInput = {
    loan_id?: number
    copy_id?: number | null
    loan_date: Date | string
    due_date?: Date | string | null
    return_date?: Date | string | null
  }

  export type loanUpdateWithoutMemberInput = {
    loan_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fine?: fineUpdateManyWithoutLoanNestedInput
    copy?: copyUpdateOneWithoutLoanNestedInput
  }

  export type loanUncheckedUpdateWithoutMemberInput = {
    loan_id?: IntFieldUpdateOperationsInput | number
    copy_id?: NullableIntFieldUpdateOperationsInput | number | null
    loan_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fine?: fineUncheckedUpdateManyWithoutLoanNestedInput
  }

  export type loanUncheckedUpdateManyWithoutMemberInput = {
    loan_id?: IntFieldUpdateOperationsInput | number
    copy_id?: NullableIntFieldUpdateOperationsInput | number | null
    loan_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type bookCreateManyPublisherInput = {
    book_id?: number
    isbn: string
    title: string
    year_published?: number | null
    genre?: string | null
  }

  export type bookUpdateWithoutPublisherInput = {
    isbn?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    year_published?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    bookauthor?: bookauthorUpdateManyWithoutBookNestedInput
    copy?: copyUpdateManyWithoutBookNestedInput
    review?: reviewUpdateManyWithoutBookNestedInput
  }

  export type bookUncheckedUpdateWithoutPublisherInput = {
    book_id?: IntFieldUpdateOperationsInput | number
    isbn?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    year_published?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    bookauthor?: bookauthorUncheckedUpdateManyWithoutBookNestedInput
    copy?: copyUncheckedUpdateManyWithoutBookNestedInput
    review?: reviewUncheckedUpdateManyWithoutBookNestedInput
  }

  export type bookUncheckedUpdateManyWithoutPublisherInput = {
    book_id?: IntFieldUpdateOperationsInput | number
    isbn?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    year_published?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}