
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
 * Model Appartment
 * 
 */
export type Appartment = $Result.DefaultSelection<Prisma.$AppartmentPayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model Sensor
 * 
 */
export type Sensor = $Result.DefaultSelection<Prisma.$SensorPayload>
/**
 * Model Device
 * 
 */
export type Device = $Result.DefaultSelection<Prisma.$DevicePayload>
/**
 * Model DeviceType
 * 
 */
export type DeviceType = $Result.DefaultSelection<Prisma.$DeviceTypePayload>
/**
 * Model SensorType
 * 
 */
export type SensorType = $Result.DefaultSelection<Prisma.$SensorTypePayload>
/**
 * Model SensorMetrics
 * 
 */
export type SensorMetrics = $Result.DefaultSelection<Prisma.$SensorMetricsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Appartments
 * const appartments = await prisma.appartment.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Appartments
   * const appartments = await prisma.appartment.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.appartment`: Exposes CRUD operations for the **Appartment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appartments
    * const appartments = await prisma.appartment.findMany()
    * ```
    */
  get appartment(): Prisma.AppartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sensor`: Exposes CRUD operations for the **Sensor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sensors
    * const sensors = await prisma.sensor.findMany()
    * ```
    */
  get sensor(): Prisma.SensorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.device`: Exposes CRUD operations for the **Device** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devices
    * const devices = await prisma.device.findMany()
    * ```
    */
  get device(): Prisma.DeviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deviceType`: Exposes CRUD operations for the **DeviceType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeviceTypes
    * const deviceTypes = await prisma.deviceType.findMany()
    * ```
    */
  get deviceType(): Prisma.DeviceTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sensorType`: Exposes CRUD operations for the **SensorType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SensorTypes
    * const sensorTypes = await prisma.sensorType.findMany()
    * ```
    */
  get sensorType(): Prisma.SensorTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sensorMetrics`: Exposes CRUD operations for the **SensorMetrics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SensorMetrics
    * const sensorMetrics = await prisma.sensorMetrics.findMany()
    * ```
    */
  get sensorMetrics(): Prisma.SensorMetricsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Appartment: 'Appartment',
    Room: 'Room',
    Sensor: 'Sensor',
    Device: 'Device',
    DeviceType: 'DeviceType',
    SensorType: 'SensorType',
    SensorMetrics: 'SensorMetrics'
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
      modelProps: "appartment" | "room" | "sensor" | "device" | "deviceType" | "sensorType" | "sensorMetrics"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Appartment: {
        payload: Prisma.$AppartmentPayload<ExtArgs>
        fields: Prisma.AppartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppartmentPayload>
          }
          findFirst: {
            args: Prisma.AppartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppartmentPayload>
          }
          findMany: {
            args: Prisma.AppartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppartmentPayload>[]
          }
          create: {
            args: Prisma.AppartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppartmentPayload>
          }
          createMany: {
            args: Prisma.AppartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppartmentPayload>[]
          }
          delete: {
            args: Prisma.AppartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppartmentPayload>
          }
          update: {
            args: Prisma.AppartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppartmentPayload>
          }
          deleteMany: {
            args: Prisma.AppartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppartmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppartmentPayload>[]
          }
          upsert: {
            args: Prisma.AppartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppartmentPayload>
          }
          aggregate: {
            args: Prisma.AppartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppartment>
          }
          groupBy: {
            args: Prisma.AppartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppartmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppartmentCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      Sensor: {
        payload: Prisma.$SensorPayload<ExtArgs>
        fields: Prisma.SensorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SensorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SensorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>
          }
          findFirst: {
            args: Prisma.SensorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SensorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>
          }
          findMany: {
            args: Prisma.SensorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>[]
          }
          create: {
            args: Prisma.SensorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>
          }
          createMany: {
            args: Prisma.SensorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SensorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>[]
          }
          delete: {
            args: Prisma.SensorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>
          }
          update: {
            args: Prisma.SensorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>
          }
          deleteMany: {
            args: Prisma.SensorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SensorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SensorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>[]
          }
          upsert: {
            args: Prisma.SensorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>
          }
          aggregate: {
            args: Prisma.SensorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSensor>
          }
          groupBy: {
            args: Prisma.SensorGroupByArgs<ExtArgs>
            result: $Utils.Optional<SensorGroupByOutputType>[]
          }
          count: {
            args: Prisma.SensorCountArgs<ExtArgs>
            result: $Utils.Optional<SensorCountAggregateOutputType> | number
          }
        }
      }
      Device: {
        payload: Prisma.$DevicePayload<ExtArgs>
        fields: Prisma.DeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findFirst: {
            args: Prisma.DeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findMany: {
            args: Prisma.DeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          create: {
            args: Prisma.DeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          createMany: {
            args: Prisma.DeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          delete: {
            args: Prisma.DeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          update: {
            args: Prisma.DeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          deleteMany: {
            args: Prisma.DeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeviceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          upsert: {
            args: Prisma.DeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          aggregate: {
            args: Prisma.DeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevice>
          }
          groupBy: {
            args: Prisma.DeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceCountAggregateOutputType> | number
          }
        }
      }
      DeviceType: {
        payload: Prisma.$DeviceTypePayload<ExtArgs>
        fields: Prisma.DeviceTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTypePayload>
          }
          findFirst: {
            args: Prisma.DeviceTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTypePayload>
          }
          findMany: {
            args: Prisma.DeviceTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTypePayload>[]
          }
          create: {
            args: Prisma.DeviceTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTypePayload>
          }
          createMany: {
            args: Prisma.DeviceTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTypePayload>[]
          }
          delete: {
            args: Prisma.DeviceTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTypePayload>
          }
          update: {
            args: Prisma.DeviceTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTypePayload>
          }
          deleteMany: {
            args: Prisma.DeviceTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeviceTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTypePayload>[]
          }
          upsert: {
            args: Prisma.DeviceTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTypePayload>
          }
          aggregate: {
            args: Prisma.DeviceTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeviceType>
          }
          groupBy: {
            args: Prisma.DeviceTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceTypeCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceTypeCountAggregateOutputType> | number
          }
        }
      }
      SensorType: {
        payload: Prisma.$SensorTypePayload<ExtArgs>
        fields: Prisma.SensorTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SensorTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SensorTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorTypePayload>
          }
          findFirst: {
            args: Prisma.SensorTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SensorTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorTypePayload>
          }
          findMany: {
            args: Prisma.SensorTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorTypePayload>[]
          }
          create: {
            args: Prisma.SensorTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorTypePayload>
          }
          createMany: {
            args: Prisma.SensorTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SensorTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorTypePayload>[]
          }
          delete: {
            args: Prisma.SensorTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorTypePayload>
          }
          update: {
            args: Prisma.SensorTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorTypePayload>
          }
          deleteMany: {
            args: Prisma.SensorTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SensorTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SensorTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorTypePayload>[]
          }
          upsert: {
            args: Prisma.SensorTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorTypePayload>
          }
          aggregate: {
            args: Prisma.SensorTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSensorType>
          }
          groupBy: {
            args: Prisma.SensorTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<SensorTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.SensorTypeCountArgs<ExtArgs>
            result: $Utils.Optional<SensorTypeCountAggregateOutputType> | number
          }
        }
      }
      SensorMetrics: {
        payload: Prisma.$SensorMetricsPayload<ExtArgs>
        fields: Prisma.SensorMetricsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SensorMetricsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorMetricsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SensorMetricsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorMetricsPayload>
          }
          findFirst: {
            args: Prisma.SensorMetricsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorMetricsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SensorMetricsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorMetricsPayload>
          }
          findMany: {
            args: Prisma.SensorMetricsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorMetricsPayload>[]
          }
          create: {
            args: Prisma.SensorMetricsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorMetricsPayload>
          }
          createMany: {
            args: Prisma.SensorMetricsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SensorMetricsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorMetricsPayload>[]
          }
          delete: {
            args: Prisma.SensorMetricsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorMetricsPayload>
          }
          update: {
            args: Prisma.SensorMetricsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorMetricsPayload>
          }
          deleteMany: {
            args: Prisma.SensorMetricsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SensorMetricsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SensorMetricsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorMetricsPayload>[]
          }
          upsert: {
            args: Prisma.SensorMetricsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorMetricsPayload>
          }
          aggregate: {
            args: Prisma.SensorMetricsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSensorMetrics>
          }
          groupBy: {
            args: Prisma.SensorMetricsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SensorMetricsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SensorMetricsCountArgs<ExtArgs>
            result: $Utils.Optional<SensorMetricsCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    appartment?: AppartmentOmit
    room?: RoomOmit
    sensor?: SensorOmit
    device?: DeviceOmit
    deviceType?: DeviceTypeOmit
    sensorType?: SensorTypeOmit
    sensorMetrics?: SensorMetricsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type AppartmentCountOutputType
   */

  export type AppartmentCountOutputType = {
    rooms: number
  }

  export type AppartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | AppartmentCountOutputTypeCountRoomsArgs
  }

  // Custom InputTypes
  /**
   * AppartmentCountOutputType without action
   */
  export type AppartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppartmentCountOutputType
     */
    select?: AppartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AppartmentCountOutputType without action
   */
  export type AppartmentCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    Sensor: number
    Device: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Sensor?: boolean | RoomCountOutputTypeCountSensorArgs
    Device?: boolean | RoomCountOutputTypeCountDeviceArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountSensorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SensorWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountDeviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
  }


  /**
   * Count Type SensorCountOutputType
   */

  export type SensorCountOutputType = {
    metrics: number
  }

  export type SensorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    metrics?: boolean | SensorCountOutputTypeCountMetricsArgs
  }

  // Custom InputTypes
  /**
   * SensorCountOutputType without action
   */
  export type SensorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorCountOutputType
     */
    select?: SensorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SensorCountOutputType without action
   */
  export type SensorCountOutputTypeCountMetricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SensorMetricsWhereInput
  }


  /**
   * Count Type DeviceTypeCountOutputType
   */

  export type DeviceTypeCountOutputType = {
    devices: number
  }

  export type DeviceTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devices?: boolean | DeviceTypeCountOutputTypeCountDevicesArgs
  }

  // Custom InputTypes
  /**
   * DeviceTypeCountOutputType without action
   */
  export type DeviceTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceTypeCountOutputType
     */
    select?: DeviceTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeviceTypeCountOutputType without action
   */
  export type DeviceTypeCountOutputTypeCountDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
  }


  /**
   * Count Type SensorTypeCountOutputType
   */

  export type SensorTypeCountOutputType = {
    sensors: number
  }

  export type SensorTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sensors?: boolean | SensorTypeCountOutputTypeCountSensorsArgs
  }

  // Custom InputTypes
  /**
   * SensorTypeCountOutputType without action
   */
  export type SensorTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorTypeCountOutputType
     */
    select?: SensorTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SensorTypeCountOutputType without action
   */
  export type SensorTypeCountOutputTypeCountSensorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SensorWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Appartment
   */

  export type AggregateAppartment = {
    _count: AppartmentCountAggregateOutputType | null
    _avg: AppartmentAvgAggregateOutputType | null
    _sum: AppartmentSumAggregateOutputType | null
    _min: AppartmentMinAggregateOutputType | null
    _max: AppartmentMaxAggregateOutputType | null
  }

  export type AppartmentAvgAggregateOutputType = {
    id: number | null
  }

  export type AppartmentSumAggregateOutputType = {
    id: number | null
  }

  export type AppartmentMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
  }

  export type AppartmentMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
  }

  export type AppartmentCountAggregateOutputType = {
    id: number
    title: number
    description: number
    _all: number
  }


  export type AppartmentAvgAggregateInputType = {
    id?: true
  }

  export type AppartmentSumAggregateInputType = {
    id?: true
  }

  export type AppartmentMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
  }

  export type AppartmentMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
  }

  export type AppartmentCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    _all?: true
  }

  export type AppartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appartment to aggregate.
     */
    where?: AppartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appartments to fetch.
     */
    orderBy?: AppartmentOrderByWithRelationInput | AppartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appartments
    **/
    _count?: true | AppartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppartmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppartmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppartmentMaxAggregateInputType
  }

  export type GetAppartmentAggregateType<T extends AppartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppartment[P]>
      : GetScalarType<T[P], AggregateAppartment[P]>
  }




  export type AppartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppartmentWhereInput
    orderBy?: AppartmentOrderByWithAggregationInput | AppartmentOrderByWithAggregationInput[]
    by: AppartmentScalarFieldEnum[] | AppartmentScalarFieldEnum
    having?: AppartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppartmentCountAggregateInputType | true
    _avg?: AppartmentAvgAggregateInputType
    _sum?: AppartmentSumAggregateInputType
    _min?: AppartmentMinAggregateInputType
    _max?: AppartmentMaxAggregateInputType
  }

  export type AppartmentGroupByOutputType = {
    id: number
    title: string
    description: string | null
    _count: AppartmentCountAggregateOutputType | null
    _avg: AppartmentAvgAggregateOutputType | null
    _sum: AppartmentSumAggregateOutputType | null
    _min: AppartmentMinAggregateOutputType | null
    _max: AppartmentMaxAggregateOutputType | null
  }

  type GetAppartmentGroupByPayload<T extends AppartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppartmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppartmentGroupByOutputType[P]>
        }
      >
    >


  export type AppartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    rooms?: boolean | Appartment$roomsArgs<ExtArgs>
    _count?: boolean | AppartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appartment"]>

  export type AppartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
  }, ExtArgs["result"]["appartment"]>

  export type AppartmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
  }, ExtArgs["result"]["appartment"]>

  export type AppartmentSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
  }

  export type AppartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description", ExtArgs["result"]["appartment"]>
  export type AppartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | Appartment$roomsArgs<ExtArgs>
    _count?: boolean | AppartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AppartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AppartmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AppartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appartment"
    objects: {
      rooms: Prisma.$RoomPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
    }, ExtArgs["result"]["appartment"]>
    composites: {}
  }

  type AppartmentGetPayload<S extends boolean | null | undefined | AppartmentDefaultArgs> = $Result.GetResult<Prisma.$AppartmentPayload, S>

  type AppartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppartmentCountAggregateInputType | true
    }

  export interface AppartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appartment'], meta: { name: 'Appartment' } }
    /**
     * Find zero or one Appartment that matches the filter.
     * @param {AppartmentFindUniqueArgs} args - Arguments to find a Appartment
     * @example
     * // Get one Appartment
     * const appartment = await prisma.appartment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppartmentFindUniqueArgs>(args: SelectSubset<T, AppartmentFindUniqueArgs<ExtArgs>>): Prisma__AppartmentClient<$Result.GetResult<Prisma.$AppartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appartment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppartmentFindUniqueOrThrowArgs} args - Arguments to find a Appartment
     * @example
     * // Get one Appartment
     * const appartment = await prisma.appartment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppartmentClient<$Result.GetResult<Prisma.$AppartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appartment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppartmentFindFirstArgs} args - Arguments to find a Appartment
     * @example
     * // Get one Appartment
     * const appartment = await prisma.appartment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppartmentFindFirstArgs>(args?: SelectSubset<T, AppartmentFindFirstArgs<ExtArgs>>): Prisma__AppartmentClient<$Result.GetResult<Prisma.$AppartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appartment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppartmentFindFirstOrThrowArgs} args - Arguments to find a Appartment
     * @example
     * // Get one Appartment
     * const appartment = await prisma.appartment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppartmentClient<$Result.GetResult<Prisma.$AppartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appartments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appartments
     * const appartments = await prisma.appartment.findMany()
     * 
     * // Get first 10 Appartments
     * const appartments = await prisma.appartment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appartmentWithIdOnly = await prisma.appartment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppartmentFindManyArgs>(args?: SelectSubset<T, AppartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appartment.
     * @param {AppartmentCreateArgs} args - Arguments to create a Appartment.
     * @example
     * // Create one Appartment
     * const Appartment = await prisma.appartment.create({
     *   data: {
     *     // ... data to create a Appartment
     *   }
     * })
     * 
     */
    create<T extends AppartmentCreateArgs>(args: SelectSubset<T, AppartmentCreateArgs<ExtArgs>>): Prisma__AppartmentClient<$Result.GetResult<Prisma.$AppartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appartments.
     * @param {AppartmentCreateManyArgs} args - Arguments to create many Appartments.
     * @example
     * // Create many Appartments
     * const appartment = await prisma.appartment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppartmentCreateManyArgs>(args?: SelectSubset<T, AppartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appartments and returns the data saved in the database.
     * @param {AppartmentCreateManyAndReturnArgs} args - Arguments to create many Appartments.
     * @example
     * // Create many Appartments
     * const appartment = await prisma.appartment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appartments and only return the `id`
     * const appartmentWithIdOnly = await prisma.appartment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appartment.
     * @param {AppartmentDeleteArgs} args - Arguments to delete one Appartment.
     * @example
     * // Delete one Appartment
     * const Appartment = await prisma.appartment.delete({
     *   where: {
     *     // ... filter to delete one Appartment
     *   }
     * })
     * 
     */
    delete<T extends AppartmentDeleteArgs>(args: SelectSubset<T, AppartmentDeleteArgs<ExtArgs>>): Prisma__AppartmentClient<$Result.GetResult<Prisma.$AppartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appartment.
     * @param {AppartmentUpdateArgs} args - Arguments to update one Appartment.
     * @example
     * // Update one Appartment
     * const appartment = await prisma.appartment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppartmentUpdateArgs>(args: SelectSubset<T, AppartmentUpdateArgs<ExtArgs>>): Prisma__AppartmentClient<$Result.GetResult<Prisma.$AppartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appartments.
     * @param {AppartmentDeleteManyArgs} args - Arguments to filter Appartments to delete.
     * @example
     * // Delete a few Appartments
     * const { count } = await prisma.appartment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppartmentDeleteManyArgs>(args?: SelectSubset<T, AppartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appartments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appartments
     * const appartment = await prisma.appartment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppartmentUpdateManyArgs>(args: SelectSubset<T, AppartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appartments and returns the data updated in the database.
     * @param {AppartmentUpdateManyAndReturnArgs} args - Arguments to update many Appartments.
     * @example
     * // Update many Appartments
     * const appartment = await prisma.appartment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appartments and only return the `id`
     * const appartmentWithIdOnly = await prisma.appartment.updateManyAndReturn({
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
    updateManyAndReturn<T extends AppartmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AppartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appartment.
     * @param {AppartmentUpsertArgs} args - Arguments to update or create a Appartment.
     * @example
     * // Update or create a Appartment
     * const appartment = await prisma.appartment.upsert({
     *   create: {
     *     // ... data to create a Appartment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appartment we want to update
     *   }
     * })
     */
    upsert<T extends AppartmentUpsertArgs>(args: SelectSubset<T, AppartmentUpsertArgs<ExtArgs>>): Prisma__AppartmentClient<$Result.GetResult<Prisma.$AppartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appartments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppartmentCountArgs} args - Arguments to filter Appartments to count.
     * @example
     * // Count the number of Appartments
     * const count = await prisma.appartment.count({
     *   where: {
     *     // ... the filter for the Appartments we want to count
     *   }
     * })
    **/
    count<T extends AppartmentCountArgs>(
      args?: Subset<T, AppartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appartment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppartmentAggregateArgs>(args: Subset<T, AppartmentAggregateArgs>): Prisma.PrismaPromise<GetAppartmentAggregateType<T>>

    /**
     * Group by Appartment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppartmentGroupByArgs} args - Group by arguments.
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
      T extends AppartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppartmentGroupByArgs['orderBy'] }
        : { orderBy?: AppartmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appartment model
   */
  readonly fields: AppartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appartment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rooms<T extends Appartment$roomsArgs<ExtArgs> = {}>(args?: Subset<T, Appartment$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Appartment model
   */
  interface AppartmentFieldRefs {
    readonly id: FieldRef<"Appartment", 'Int'>
    readonly title: FieldRef<"Appartment", 'String'>
    readonly description: FieldRef<"Appartment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Appartment findUnique
   */
  export type AppartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appartment
     */
    select?: AppartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appartment
     */
    omit?: AppartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppartmentInclude<ExtArgs> | null
    /**
     * Filter, which Appartment to fetch.
     */
    where: AppartmentWhereUniqueInput
  }

  /**
   * Appartment findUniqueOrThrow
   */
  export type AppartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appartment
     */
    select?: AppartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appartment
     */
    omit?: AppartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppartmentInclude<ExtArgs> | null
    /**
     * Filter, which Appartment to fetch.
     */
    where: AppartmentWhereUniqueInput
  }

  /**
   * Appartment findFirst
   */
  export type AppartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appartment
     */
    select?: AppartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appartment
     */
    omit?: AppartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppartmentInclude<ExtArgs> | null
    /**
     * Filter, which Appartment to fetch.
     */
    where?: AppartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appartments to fetch.
     */
    orderBy?: AppartmentOrderByWithRelationInput | AppartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appartments.
     */
    cursor?: AppartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appartments.
     */
    distinct?: AppartmentScalarFieldEnum | AppartmentScalarFieldEnum[]
  }

  /**
   * Appartment findFirstOrThrow
   */
  export type AppartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appartment
     */
    select?: AppartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appartment
     */
    omit?: AppartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppartmentInclude<ExtArgs> | null
    /**
     * Filter, which Appartment to fetch.
     */
    where?: AppartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appartments to fetch.
     */
    orderBy?: AppartmentOrderByWithRelationInput | AppartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appartments.
     */
    cursor?: AppartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appartments.
     */
    distinct?: AppartmentScalarFieldEnum | AppartmentScalarFieldEnum[]
  }

  /**
   * Appartment findMany
   */
  export type AppartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appartment
     */
    select?: AppartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appartment
     */
    omit?: AppartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppartmentInclude<ExtArgs> | null
    /**
     * Filter, which Appartments to fetch.
     */
    where?: AppartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appartments to fetch.
     */
    orderBy?: AppartmentOrderByWithRelationInput | AppartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appartments.
     */
    cursor?: AppartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appartments.
     */
    skip?: number
    distinct?: AppartmentScalarFieldEnum | AppartmentScalarFieldEnum[]
  }

  /**
   * Appartment create
   */
  export type AppartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appartment
     */
    select?: AppartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appartment
     */
    omit?: AppartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appartment.
     */
    data: XOR<AppartmentCreateInput, AppartmentUncheckedCreateInput>
  }

  /**
   * Appartment createMany
   */
  export type AppartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appartments.
     */
    data: AppartmentCreateManyInput | AppartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appartment createManyAndReturn
   */
  export type AppartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appartment
     */
    select?: AppartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appartment
     */
    omit?: AppartmentOmit<ExtArgs> | null
    /**
     * The data used to create many Appartments.
     */
    data: AppartmentCreateManyInput | AppartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appartment update
   */
  export type AppartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appartment
     */
    select?: AppartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appartment
     */
    omit?: AppartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appartment.
     */
    data: XOR<AppartmentUpdateInput, AppartmentUncheckedUpdateInput>
    /**
     * Choose, which Appartment to update.
     */
    where: AppartmentWhereUniqueInput
  }

  /**
   * Appartment updateMany
   */
  export type AppartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appartments.
     */
    data: XOR<AppartmentUpdateManyMutationInput, AppartmentUncheckedUpdateManyInput>
    /**
     * Filter which Appartments to update
     */
    where?: AppartmentWhereInput
    /**
     * Limit how many Appartments to update.
     */
    limit?: number
  }

  /**
   * Appartment updateManyAndReturn
   */
  export type AppartmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appartment
     */
    select?: AppartmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appartment
     */
    omit?: AppartmentOmit<ExtArgs> | null
    /**
     * The data used to update Appartments.
     */
    data: XOR<AppartmentUpdateManyMutationInput, AppartmentUncheckedUpdateManyInput>
    /**
     * Filter which Appartments to update
     */
    where?: AppartmentWhereInput
    /**
     * Limit how many Appartments to update.
     */
    limit?: number
  }

  /**
   * Appartment upsert
   */
  export type AppartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appartment
     */
    select?: AppartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appartment
     */
    omit?: AppartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appartment to update in case it exists.
     */
    where: AppartmentWhereUniqueInput
    /**
     * In case the Appartment found by the `where` argument doesn't exist, create a new Appartment with this data.
     */
    create: XOR<AppartmentCreateInput, AppartmentUncheckedCreateInput>
    /**
     * In case the Appartment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppartmentUpdateInput, AppartmentUncheckedUpdateInput>
  }

  /**
   * Appartment delete
   */
  export type AppartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appartment
     */
    select?: AppartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appartment
     */
    omit?: AppartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppartmentInclude<ExtArgs> | null
    /**
     * Filter which Appartment to delete.
     */
    where: AppartmentWhereUniqueInput
  }

  /**
   * Appartment deleteMany
   */
  export type AppartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appartments to delete
     */
    where?: AppartmentWhereInput
    /**
     * Limit how many Appartments to delete.
     */
    limit?: number
  }

  /**
   * Appartment.rooms
   */
  export type Appartment$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Appartment without action
   */
  export type AppartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appartment
     */
    select?: AppartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appartment
     */
    omit?: AppartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppartmentInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    id: number | null
    appartmentId: number | null
  }

  export type RoomSumAggregateOutputType = {
    id: number | null
    appartmentId: number | null
  }

  export type RoomMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    appartmentId: number | null
  }

  export type RoomMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    appartmentId: number | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    title: number
    description: number
    appartmentId: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    id?: true
    appartmentId?: true
  }

  export type RoomSumAggregateInputType = {
    id?: true
    appartmentId?: true
  }

  export type RoomMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    appartmentId?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    appartmentId?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    appartmentId?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: number
    title: string
    description: string | null
    appartmentId: number
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    appartmentId?: boolean
    appartment?: boolean | AppartmentDefaultArgs<ExtArgs>
    Sensor?: boolean | Room$SensorArgs<ExtArgs>
    Device?: boolean | Room$DeviceArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    appartmentId?: boolean
    appartment?: boolean | AppartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    appartmentId?: boolean
    appartment?: boolean | AppartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    appartmentId?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "appartmentId", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appartment?: boolean | AppartmentDefaultArgs<ExtArgs>
    Sensor?: boolean | Room$SensorArgs<ExtArgs>
    Device?: boolean | Room$DeviceArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appartment?: boolean | AppartmentDefaultArgs<ExtArgs>
  }
  export type RoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appartment?: boolean | AppartmentDefaultArgs<ExtArgs>
  }

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      appartment: Prisma.$AppartmentPayload<ExtArgs>
      Sensor: Prisma.$SensorPayload<ExtArgs>[]
      Device: Prisma.$DevicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      appartmentId: number
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {RoomCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms and returns the data updated in the database.
     * @param {RoomUpdateManyAndReturnArgs} args - Arguments to update many Rooms.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.updateManyAndReturn({
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
    updateManyAndReturn<T extends RoomUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
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
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appartment<T extends AppartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppartmentDefaultArgs<ExtArgs>>): Prisma__AppartmentClient<$Result.GetResult<Prisma.$AppartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Sensor<T extends Room$SensorArgs<ExtArgs> = {}>(args?: Subset<T, Room$SensorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Device<T extends Room$DeviceArgs<ExtArgs> = {}>(args?: Subset<T, Room$DeviceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Room model
   */
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'Int'>
    readonly title: FieldRef<"Room", 'String'>
    readonly description: FieldRef<"Room", 'String'>
    readonly appartmentId: FieldRef<"Room", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room createManyAndReturn
   */
  export type RoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room updateManyAndReturn
   */
  export type RoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room.Sensor
   */
  export type Room$SensorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    where?: SensorWhereInput
    orderBy?: SensorOrderByWithRelationInput | SensorOrderByWithRelationInput[]
    cursor?: SensorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SensorScalarFieldEnum | SensorScalarFieldEnum[]
  }

  /**
   * Room.Device
   */
  export type Room$DeviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    cursor?: DeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model Sensor
   */

  export type AggregateSensor = {
    _count: SensorCountAggregateOutputType | null
    _avg: SensorAvgAggregateOutputType | null
    _sum: SensorSumAggregateOutputType | null
    _min: SensorMinAggregateOutputType | null
    _max: SensorMaxAggregateOutputType | null
  }

  export type SensorAvgAggregateOutputType = {
    id: number | null
    roomId: number | null
    typeId: number | null
  }

  export type SensorSumAggregateOutputType = {
    id: number | null
    roomId: number | null
    typeId: number | null
  }

  export type SensorMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    roomId: number | null
    typeId: number | null
  }

  export type SensorMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    roomId: number | null
    typeId: number | null
  }

  export type SensorCountAggregateOutputType = {
    id: number
    title: number
    description: number
    attributes: number
    value: number
    roomId: number
    typeId: number
    _all: number
  }


  export type SensorAvgAggregateInputType = {
    id?: true
    roomId?: true
    typeId?: true
  }

  export type SensorSumAggregateInputType = {
    id?: true
    roomId?: true
    typeId?: true
  }

  export type SensorMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    roomId?: true
    typeId?: true
  }

  export type SensorMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    roomId?: true
    typeId?: true
  }

  export type SensorCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    attributes?: true
    value?: true
    roomId?: true
    typeId?: true
    _all?: true
  }

  export type SensorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sensor to aggregate.
     */
    where?: SensorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sensors to fetch.
     */
    orderBy?: SensorOrderByWithRelationInput | SensorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SensorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sensors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sensors
    **/
    _count?: true | SensorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SensorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SensorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SensorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SensorMaxAggregateInputType
  }

  export type GetSensorAggregateType<T extends SensorAggregateArgs> = {
        [P in keyof T & keyof AggregateSensor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSensor[P]>
      : GetScalarType<T[P], AggregateSensor[P]>
  }




  export type SensorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SensorWhereInput
    orderBy?: SensorOrderByWithAggregationInput | SensorOrderByWithAggregationInput[]
    by: SensorScalarFieldEnum[] | SensorScalarFieldEnum
    having?: SensorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SensorCountAggregateInputType | true
    _avg?: SensorAvgAggregateInputType
    _sum?: SensorSumAggregateInputType
    _min?: SensorMinAggregateInputType
    _max?: SensorMaxAggregateInputType
  }

  export type SensorGroupByOutputType = {
    id: number
    title: string
    description: string | null
    attributes: JsonValue | null
    value: JsonValue | null
    roomId: number
    typeId: number
    _count: SensorCountAggregateOutputType | null
    _avg: SensorAvgAggregateOutputType | null
    _sum: SensorSumAggregateOutputType | null
    _min: SensorMinAggregateOutputType | null
    _max: SensorMaxAggregateOutputType | null
  }

  type GetSensorGroupByPayload<T extends SensorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SensorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SensorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SensorGroupByOutputType[P]>
            : GetScalarType<T[P], SensorGroupByOutputType[P]>
        }
      >
    >


  export type SensorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    attributes?: boolean
    value?: boolean
    roomId?: boolean
    typeId?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    type?: boolean | SensorTypeDefaultArgs<ExtArgs>
    metrics?: boolean | Sensor$metricsArgs<ExtArgs>
    _count?: boolean | SensorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sensor"]>

  export type SensorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    attributes?: boolean
    value?: boolean
    roomId?: boolean
    typeId?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    type?: boolean | SensorTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sensor"]>

  export type SensorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    attributes?: boolean
    value?: boolean
    roomId?: boolean
    typeId?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    type?: boolean | SensorTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sensor"]>

  export type SensorSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    attributes?: boolean
    value?: boolean
    roomId?: boolean
    typeId?: boolean
  }

  export type SensorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "attributes" | "value" | "roomId" | "typeId", ExtArgs["result"]["sensor"]>
  export type SensorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    type?: boolean | SensorTypeDefaultArgs<ExtArgs>
    metrics?: boolean | Sensor$metricsArgs<ExtArgs>
    _count?: boolean | SensorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SensorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    type?: boolean | SensorTypeDefaultArgs<ExtArgs>
  }
  export type SensorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    type?: boolean | SensorTypeDefaultArgs<ExtArgs>
  }

  export type $SensorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sensor"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
      type: Prisma.$SensorTypePayload<ExtArgs>
      metrics: Prisma.$SensorMetricsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      attributes: Prisma.JsonValue | null
      value: Prisma.JsonValue | null
      roomId: number
      typeId: number
    }, ExtArgs["result"]["sensor"]>
    composites: {}
  }

  type SensorGetPayload<S extends boolean | null | undefined | SensorDefaultArgs> = $Result.GetResult<Prisma.$SensorPayload, S>

  type SensorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SensorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SensorCountAggregateInputType | true
    }

  export interface SensorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sensor'], meta: { name: 'Sensor' } }
    /**
     * Find zero or one Sensor that matches the filter.
     * @param {SensorFindUniqueArgs} args - Arguments to find a Sensor
     * @example
     * // Get one Sensor
     * const sensor = await prisma.sensor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SensorFindUniqueArgs>(args: SelectSubset<T, SensorFindUniqueArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sensor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SensorFindUniqueOrThrowArgs} args - Arguments to find a Sensor
     * @example
     * // Get one Sensor
     * const sensor = await prisma.sensor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SensorFindUniqueOrThrowArgs>(args: SelectSubset<T, SensorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sensor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorFindFirstArgs} args - Arguments to find a Sensor
     * @example
     * // Get one Sensor
     * const sensor = await prisma.sensor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SensorFindFirstArgs>(args?: SelectSubset<T, SensorFindFirstArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sensor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorFindFirstOrThrowArgs} args - Arguments to find a Sensor
     * @example
     * // Get one Sensor
     * const sensor = await prisma.sensor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SensorFindFirstOrThrowArgs>(args?: SelectSubset<T, SensorFindFirstOrThrowArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sensors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sensors
     * const sensors = await prisma.sensor.findMany()
     * 
     * // Get first 10 Sensors
     * const sensors = await prisma.sensor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sensorWithIdOnly = await prisma.sensor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SensorFindManyArgs>(args?: SelectSubset<T, SensorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sensor.
     * @param {SensorCreateArgs} args - Arguments to create a Sensor.
     * @example
     * // Create one Sensor
     * const Sensor = await prisma.sensor.create({
     *   data: {
     *     // ... data to create a Sensor
     *   }
     * })
     * 
     */
    create<T extends SensorCreateArgs>(args: SelectSubset<T, SensorCreateArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sensors.
     * @param {SensorCreateManyArgs} args - Arguments to create many Sensors.
     * @example
     * // Create many Sensors
     * const sensor = await prisma.sensor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SensorCreateManyArgs>(args?: SelectSubset<T, SensorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sensors and returns the data saved in the database.
     * @param {SensorCreateManyAndReturnArgs} args - Arguments to create many Sensors.
     * @example
     * // Create many Sensors
     * const sensor = await prisma.sensor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sensors and only return the `id`
     * const sensorWithIdOnly = await prisma.sensor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SensorCreateManyAndReturnArgs>(args?: SelectSubset<T, SensorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sensor.
     * @param {SensorDeleteArgs} args - Arguments to delete one Sensor.
     * @example
     * // Delete one Sensor
     * const Sensor = await prisma.sensor.delete({
     *   where: {
     *     // ... filter to delete one Sensor
     *   }
     * })
     * 
     */
    delete<T extends SensorDeleteArgs>(args: SelectSubset<T, SensorDeleteArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sensor.
     * @param {SensorUpdateArgs} args - Arguments to update one Sensor.
     * @example
     * // Update one Sensor
     * const sensor = await prisma.sensor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SensorUpdateArgs>(args: SelectSubset<T, SensorUpdateArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sensors.
     * @param {SensorDeleteManyArgs} args - Arguments to filter Sensors to delete.
     * @example
     * // Delete a few Sensors
     * const { count } = await prisma.sensor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SensorDeleteManyArgs>(args?: SelectSubset<T, SensorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sensors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sensors
     * const sensor = await prisma.sensor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SensorUpdateManyArgs>(args: SelectSubset<T, SensorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sensors and returns the data updated in the database.
     * @param {SensorUpdateManyAndReturnArgs} args - Arguments to update many Sensors.
     * @example
     * // Update many Sensors
     * const sensor = await prisma.sensor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sensors and only return the `id`
     * const sensorWithIdOnly = await prisma.sensor.updateManyAndReturn({
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
    updateManyAndReturn<T extends SensorUpdateManyAndReturnArgs>(args: SelectSubset<T, SensorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sensor.
     * @param {SensorUpsertArgs} args - Arguments to update or create a Sensor.
     * @example
     * // Update or create a Sensor
     * const sensor = await prisma.sensor.upsert({
     *   create: {
     *     // ... data to create a Sensor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sensor we want to update
     *   }
     * })
     */
    upsert<T extends SensorUpsertArgs>(args: SelectSubset<T, SensorUpsertArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sensors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorCountArgs} args - Arguments to filter Sensors to count.
     * @example
     * // Count the number of Sensors
     * const count = await prisma.sensor.count({
     *   where: {
     *     // ... the filter for the Sensors we want to count
     *   }
     * })
    **/
    count<T extends SensorCountArgs>(
      args?: Subset<T, SensorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SensorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sensor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SensorAggregateArgs>(args: Subset<T, SensorAggregateArgs>): Prisma.PrismaPromise<GetSensorAggregateType<T>>

    /**
     * Group by Sensor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorGroupByArgs} args - Group by arguments.
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
      T extends SensorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SensorGroupByArgs['orderBy'] }
        : { orderBy?: SensorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SensorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSensorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sensor model
   */
  readonly fields: SensorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sensor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SensorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    type<T extends SensorTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SensorTypeDefaultArgs<ExtArgs>>): Prisma__SensorTypeClient<$Result.GetResult<Prisma.$SensorTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    metrics<T extends Sensor$metricsArgs<ExtArgs> = {}>(args?: Subset<T, Sensor$metricsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorMetricsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Sensor model
   */
  interface SensorFieldRefs {
    readonly id: FieldRef<"Sensor", 'Int'>
    readonly title: FieldRef<"Sensor", 'String'>
    readonly description: FieldRef<"Sensor", 'String'>
    readonly attributes: FieldRef<"Sensor", 'Json'>
    readonly value: FieldRef<"Sensor", 'Json'>
    readonly roomId: FieldRef<"Sensor", 'Int'>
    readonly typeId: FieldRef<"Sensor", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Sensor findUnique
   */
  export type SensorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * Filter, which Sensor to fetch.
     */
    where: SensorWhereUniqueInput
  }

  /**
   * Sensor findUniqueOrThrow
   */
  export type SensorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * Filter, which Sensor to fetch.
     */
    where: SensorWhereUniqueInput
  }

  /**
   * Sensor findFirst
   */
  export type SensorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * Filter, which Sensor to fetch.
     */
    where?: SensorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sensors to fetch.
     */
    orderBy?: SensorOrderByWithRelationInput | SensorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sensors.
     */
    cursor?: SensorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sensors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sensors.
     */
    distinct?: SensorScalarFieldEnum | SensorScalarFieldEnum[]
  }

  /**
   * Sensor findFirstOrThrow
   */
  export type SensorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * Filter, which Sensor to fetch.
     */
    where?: SensorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sensors to fetch.
     */
    orderBy?: SensorOrderByWithRelationInput | SensorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sensors.
     */
    cursor?: SensorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sensors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sensors.
     */
    distinct?: SensorScalarFieldEnum | SensorScalarFieldEnum[]
  }

  /**
   * Sensor findMany
   */
  export type SensorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * Filter, which Sensors to fetch.
     */
    where?: SensorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sensors to fetch.
     */
    orderBy?: SensorOrderByWithRelationInput | SensorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sensors.
     */
    cursor?: SensorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sensors.
     */
    skip?: number
    distinct?: SensorScalarFieldEnum | SensorScalarFieldEnum[]
  }

  /**
   * Sensor create
   */
  export type SensorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * The data needed to create a Sensor.
     */
    data: XOR<SensorCreateInput, SensorUncheckedCreateInput>
  }

  /**
   * Sensor createMany
   */
  export type SensorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sensors.
     */
    data: SensorCreateManyInput | SensorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sensor createManyAndReturn
   */
  export type SensorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * The data used to create many Sensors.
     */
    data: SensorCreateManyInput | SensorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sensor update
   */
  export type SensorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * The data needed to update a Sensor.
     */
    data: XOR<SensorUpdateInput, SensorUncheckedUpdateInput>
    /**
     * Choose, which Sensor to update.
     */
    where: SensorWhereUniqueInput
  }

  /**
   * Sensor updateMany
   */
  export type SensorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sensors.
     */
    data: XOR<SensorUpdateManyMutationInput, SensorUncheckedUpdateManyInput>
    /**
     * Filter which Sensors to update
     */
    where?: SensorWhereInput
    /**
     * Limit how many Sensors to update.
     */
    limit?: number
  }

  /**
   * Sensor updateManyAndReturn
   */
  export type SensorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * The data used to update Sensors.
     */
    data: XOR<SensorUpdateManyMutationInput, SensorUncheckedUpdateManyInput>
    /**
     * Filter which Sensors to update
     */
    where?: SensorWhereInput
    /**
     * Limit how many Sensors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sensor upsert
   */
  export type SensorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * The filter to search for the Sensor to update in case it exists.
     */
    where: SensorWhereUniqueInput
    /**
     * In case the Sensor found by the `where` argument doesn't exist, create a new Sensor with this data.
     */
    create: XOR<SensorCreateInput, SensorUncheckedCreateInput>
    /**
     * In case the Sensor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SensorUpdateInput, SensorUncheckedUpdateInput>
  }

  /**
   * Sensor delete
   */
  export type SensorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * Filter which Sensor to delete.
     */
    where: SensorWhereUniqueInput
  }

  /**
   * Sensor deleteMany
   */
  export type SensorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sensors to delete
     */
    where?: SensorWhereInput
    /**
     * Limit how many Sensors to delete.
     */
    limit?: number
  }

  /**
   * Sensor.metrics
   */
  export type Sensor$metricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorMetrics
     */
    select?: SensorMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorMetrics
     */
    omit?: SensorMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorMetricsInclude<ExtArgs> | null
    where?: SensorMetricsWhereInput
    orderBy?: SensorMetricsOrderByWithRelationInput | SensorMetricsOrderByWithRelationInput[]
    cursor?: SensorMetricsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SensorMetricsScalarFieldEnum | SensorMetricsScalarFieldEnum[]
  }

  /**
   * Sensor without action
   */
  export type SensorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
  }


  /**
   * Model Device
   */

  export type AggregateDevice = {
    _count: DeviceCountAggregateOutputType | null
    _avg: DeviceAvgAggregateOutputType | null
    _sum: DeviceSumAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  export type DeviceAvgAggregateOutputType = {
    id: number | null
    typeId: number | null
    roomId: number | null
  }

  export type DeviceSumAggregateOutputType = {
    id: number | null
    typeId: number | null
    roomId: number | null
  }

  export type DeviceMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    status: string | null
    typeId: number | null
    roomId: number | null
  }

  export type DeviceMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    status: string | null
    typeId: number | null
    roomId: number | null
  }

  export type DeviceCountAggregateOutputType = {
    id: number
    title: number
    description: number
    status: number
    attributes: number
    typeId: number
    roomId: number
    _all: number
  }


  export type DeviceAvgAggregateInputType = {
    id?: true
    typeId?: true
    roomId?: true
  }

  export type DeviceSumAggregateInputType = {
    id?: true
    typeId?: true
    roomId?: true
  }

  export type DeviceMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    typeId?: true
    roomId?: true
  }

  export type DeviceMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    typeId?: true
    roomId?: true
  }

  export type DeviceCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    attributes?: true
    typeId?: true
    roomId?: true
    _all?: true
  }

  export type DeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Device to aggregate.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devices
    **/
    _count?: true | DeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeviceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeviceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceMaxAggregateInputType
  }

  export type GetDeviceAggregateType<T extends DeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice[P]>
      : GetScalarType<T[P], AggregateDevice[P]>
  }




  export type DeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithAggregationInput | DeviceOrderByWithAggregationInput[]
    by: DeviceScalarFieldEnum[] | DeviceScalarFieldEnum
    having?: DeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceCountAggregateInputType | true
    _avg?: DeviceAvgAggregateInputType
    _sum?: DeviceSumAggregateInputType
    _min?: DeviceMinAggregateInputType
    _max?: DeviceMaxAggregateInputType
  }

  export type DeviceGroupByOutputType = {
    id: number
    title: string
    description: string | null
    status: string | null
    attributes: JsonValue | null
    typeId: number
    roomId: number
    _count: DeviceCountAggregateOutputType | null
    _avg: DeviceAvgAggregateOutputType | null
    _sum: DeviceSumAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  type GetDeviceGroupByPayload<T extends DeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceGroupByOutputType[P]>
        }
      >
    >


  export type DeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    attributes?: boolean
    typeId?: boolean
    roomId?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    type?: boolean | DeviceTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    attributes?: boolean
    typeId?: boolean
    roomId?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    type?: boolean | DeviceTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    attributes?: boolean
    typeId?: boolean
    roomId?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    type?: boolean | DeviceTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    attributes?: boolean
    typeId?: boolean
    roomId?: boolean
  }

  export type DeviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "status" | "attributes" | "typeId" | "roomId", ExtArgs["result"]["device"]>
  export type DeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    type?: boolean | DeviceTypeDefaultArgs<ExtArgs>
  }
  export type DeviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    type?: boolean | DeviceTypeDefaultArgs<ExtArgs>
  }
  export type DeviceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    type?: boolean | DeviceTypeDefaultArgs<ExtArgs>
  }

  export type $DevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Device"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
      type: Prisma.$DeviceTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      status: string | null
      attributes: Prisma.JsonValue | null
      typeId: number
      roomId: number
    }, ExtArgs["result"]["device"]>
    composites: {}
  }

  type DeviceGetPayload<S extends boolean | null | undefined | DeviceDefaultArgs> = $Result.GetResult<Prisma.$DevicePayload, S>

  type DeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceCountAggregateInputType | true
    }

  export interface DeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Device'], meta: { name: 'Device' } }
    /**
     * Find zero or one Device that matches the filter.
     * @param {DeviceFindUniqueArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceFindUniqueArgs>(args: SelectSubset<T, DeviceFindUniqueArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Device that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceFindUniqueOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceFindFirstArgs>(args?: SelectSubset<T, DeviceFindFirstArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.device.findMany()
     * 
     * // Get first 10 Devices
     * const devices = await prisma.device.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceWithIdOnly = await prisma.device.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceFindManyArgs>(args?: SelectSubset<T, DeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Device.
     * @param {DeviceCreateArgs} args - Arguments to create a Device.
     * @example
     * // Create one Device
     * const Device = await prisma.device.create({
     *   data: {
     *     // ... data to create a Device
     *   }
     * })
     * 
     */
    create<T extends DeviceCreateArgs>(args: SelectSubset<T, DeviceCreateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Devices.
     * @param {DeviceCreateManyArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceCreateManyArgs>(args?: SelectSubset<T, DeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Devices and returns the data saved in the database.
     * @param {DeviceCreateManyAndReturnArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Device.
     * @param {DeviceDeleteArgs} args - Arguments to delete one Device.
     * @example
     * // Delete one Device
     * const Device = await prisma.device.delete({
     *   where: {
     *     // ... filter to delete one Device
     *   }
     * })
     * 
     */
    delete<T extends DeviceDeleteArgs>(args: SelectSubset<T, DeviceDeleteArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Device.
     * @param {DeviceUpdateArgs} args - Arguments to update one Device.
     * @example
     * // Update one Device
     * const device = await prisma.device.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceUpdateArgs>(args: SelectSubset<T, DeviceUpdateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Devices.
     * @param {DeviceDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.device.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceDeleteManyArgs>(args?: SelectSubset<T, DeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceUpdateManyArgs>(args: SelectSubset<T, DeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices and returns the data updated in the database.
     * @param {DeviceUpdateManyAndReturnArgs} args - Arguments to update many Devices.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.updateManyAndReturn({
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
    updateManyAndReturn<T extends DeviceUpdateManyAndReturnArgs>(args: SelectSubset<T, DeviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Device.
     * @param {DeviceUpsertArgs} args - Arguments to update or create a Device.
     * @example
     * // Update or create a Device
     * const device = await prisma.device.upsert({
     *   create: {
     *     // ... data to create a Device
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device we want to update
     *   }
     * })
     */
    upsert<T extends DeviceUpsertArgs>(args: SelectSubset<T, DeviceUpsertArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.device.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
    **/
    count<T extends DeviceCountArgs>(
      args?: Subset<T, DeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceAggregateArgs>(args: Subset<T, DeviceAggregateArgs>): Prisma.PrismaPromise<GetDeviceAggregateType<T>>

    /**
     * Group by Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceGroupByArgs} args - Group by arguments.
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
      T extends DeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceGroupByArgs['orderBy'] }
        : { orderBy?: DeviceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Device model
   */
  readonly fields: DeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Device.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    type<T extends DeviceTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceTypeDefaultArgs<ExtArgs>>): Prisma__DeviceTypeClient<$Result.GetResult<Prisma.$DeviceTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Device model
   */
  interface DeviceFieldRefs {
    readonly id: FieldRef<"Device", 'Int'>
    readonly title: FieldRef<"Device", 'String'>
    readonly description: FieldRef<"Device", 'String'>
    readonly status: FieldRef<"Device", 'String'>
    readonly attributes: FieldRef<"Device", 'Json'>
    readonly typeId: FieldRef<"Device", 'Int'>
    readonly roomId: FieldRef<"Device", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Device findUnique
   */
  export type DeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findUniqueOrThrow
   */
  export type DeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findFirst
   */
  export type DeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findFirstOrThrow
   */
  export type DeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findMany
   */
  export type DeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device create
   */
  export type DeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a Device.
     */
    data: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
  }

  /**
   * Device createMany
   */
  export type DeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Device createManyAndReturn
   */
  export type DeviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Device update
   */
  export type DeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a Device.
     */
    data: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
    /**
     * Choose, which Device to update.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device updateMany
   */
  export type DeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
  }

  /**
   * Device updateManyAndReturn
   */
  export type DeviceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Device upsert
   */
  export type DeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the Device to update in case it exists.
     */
    where: DeviceWhereUniqueInput
    /**
     * In case the Device found by the `where` argument doesn't exist, create a new Device with this data.
     */
    create: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
    /**
     * In case the Device was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
  }

  /**
   * Device delete
   */
  export type DeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter which Device to delete.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device deleteMany
   */
  export type DeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devices to delete
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to delete.
     */
    limit?: number
  }

  /**
   * Device without action
   */
  export type DeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
  }


  /**
   * Model DeviceType
   */

  export type AggregateDeviceType = {
    _count: DeviceTypeCountAggregateOutputType | null
    _avg: DeviceTypeAvgAggregateOutputType | null
    _sum: DeviceTypeSumAggregateOutputType | null
    _min: DeviceTypeMinAggregateOutputType | null
    _max: DeviceTypeMaxAggregateOutputType | null
  }

  export type DeviceTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type DeviceTypeSumAggregateOutputType = {
    id: number | null
  }

  export type DeviceTypeMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
  }

  export type DeviceTypeMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
  }

  export type DeviceTypeCountAggregateOutputType = {
    id: number
    title: number
    description: number
    attributes: number
    _all: number
  }


  export type DeviceTypeAvgAggregateInputType = {
    id?: true
  }

  export type DeviceTypeSumAggregateInputType = {
    id?: true
  }

  export type DeviceTypeMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
  }

  export type DeviceTypeMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
  }

  export type DeviceTypeCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    attributes?: true
    _all?: true
  }

  export type DeviceTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceType to aggregate.
     */
    where?: DeviceTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceTypes to fetch.
     */
    orderBy?: DeviceTypeOrderByWithRelationInput | DeviceTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeviceTypes
    **/
    _count?: true | DeviceTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeviceTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeviceTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceTypeMaxAggregateInputType
  }

  export type GetDeviceTypeAggregateType<T extends DeviceTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateDeviceType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeviceType[P]>
      : GetScalarType<T[P], AggregateDeviceType[P]>
  }




  export type DeviceTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceTypeWhereInput
    orderBy?: DeviceTypeOrderByWithAggregationInput | DeviceTypeOrderByWithAggregationInput[]
    by: DeviceTypeScalarFieldEnum[] | DeviceTypeScalarFieldEnum
    having?: DeviceTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceTypeCountAggregateInputType | true
    _avg?: DeviceTypeAvgAggregateInputType
    _sum?: DeviceTypeSumAggregateInputType
    _min?: DeviceTypeMinAggregateInputType
    _max?: DeviceTypeMaxAggregateInputType
  }

  export type DeviceTypeGroupByOutputType = {
    id: number
    title: string
    description: string | null
    attributes: JsonValue | null
    _count: DeviceTypeCountAggregateOutputType | null
    _avg: DeviceTypeAvgAggregateOutputType | null
    _sum: DeviceTypeSumAggregateOutputType | null
    _min: DeviceTypeMinAggregateOutputType | null
    _max: DeviceTypeMaxAggregateOutputType | null
  }

  type GetDeviceTypeGroupByPayload<T extends DeviceTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceTypeGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceTypeGroupByOutputType[P]>
        }
      >
    >


  export type DeviceTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    attributes?: boolean
    devices?: boolean | DeviceType$devicesArgs<ExtArgs>
    _count?: boolean | DeviceTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceType"]>

  export type DeviceTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    attributes?: boolean
  }, ExtArgs["result"]["deviceType"]>

  export type DeviceTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    attributes?: boolean
  }, ExtArgs["result"]["deviceType"]>

  export type DeviceTypeSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    attributes?: boolean
  }

  export type DeviceTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "attributes", ExtArgs["result"]["deviceType"]>
  export type DeviceTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devices?: boolean | DeviceType$devicesArgs<ExtArgs>
    _count?: boolean | DeviceTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeviceTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DeviceTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DeviceTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeviceType"
    objects: {
      devices: Prisma.$DevicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      attributes: Prisma.JsonValue | null
    }, ExtArgs["result"]["deviceType"]>
    composites: {}
  }

  type DeviceTypeGetPayload<S extends boolean | null | undefined | DeviceTypeDefaultArgs> = $Result.GetResult<Prisma.$DeviceTypePayload, S>

  type DeviceTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceTypeCountAggregateInputType | true
    }

  export interface DeviceTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeviceType'], meta: { name: 'DeviceType' } }
    /**
     * Find zero or one DeviceType that matches the filter.
     * @param {DeviceTypeFindUniqueArgs} args - Arguments to find a DeviceType
     * @example
     * // Get one DeviceType
     * const deviceType = await prisma.deviceType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceTypeFindUniqueArgs>(args: SelectSubset<T, DeviceTypeFindUniqueArgs<ExtArgs>>): Prisma__DeviceTypeClient<$Result.GetResult<Prisma.$DeviceTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeviceType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceTypeFindUniqueOrThrowArgs} args - Arguments to find a DeviceType
     * @example
     * // Get one DeviceType
     * const deviceType = await prisma.deviceType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceTypeClient<$Result.GetResult<Prisma.$DeviceTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeviceType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTypeFindFirstArgs} args - Arguments to find a DeviceType
     * @example
     * // Get one DeviceType
     * const deviceType = await prisma.deviceType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceTypeFindFirstArgs>(args?: SelectSubset<T, DeviceTypeFindFirstArgs<ExtArgs>>): Prisma__DeviceTypeClient<$Result.GetResult<Prisma.$DeviceTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeviceType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTypeFindFirstOrThrowArgs} args - Arguments to find a DeviceType
     * @example
     * // Get one DeviceType
     * const deviceType = await prisma.deviceType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceTypeClient<$Result.GetResult<Prisma.$DeviceTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeviceTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeviceTypes
     * const deviceTypes = await prisma.deviceType.findMany()
     * 
     * // Get first 10 DeviceTypes
     * const deviceTypes = await prisma.deviceType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceTypeWithIdOnly = await prisma.deviceType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceTypeFindManyArgs>(args?: SelectSubset<T, DeviceTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeviceType.
     * @param {DeviceTypeCreateArgs} args - Arguments to create a DeviceType.
     * @example
     * // Create one DeviceType
     * const DeviceType = await prisma.deviceType.create({
     *   data: {
     *     // ... data to create a DeviceType
     *   }
     * })
     * 
     */
    create<T extends DeviceTypeCreateArgs>(args: SelectSubset<T, DeviceTypeCreateArgs<ExtArgs>>): Prisma__DeviceTypeClient<$Result.GetResult<Prisma.$DeviceTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeviceTypes.
     * @param {DeviceTypeCreateManyArgs} args - Arguments to create many DeviceTypes.
     * @example
     * // Create many DeviceTypes
     * const deviceType = await prisma.deviceType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceTypeCreateManyArgs>(args?: SelectSubset<T, DeviceTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeviceTypes and returns the data saved in the database.
     * @param {DeviceTypeCreateManyAndReturnArgs} args - Arguments to create many DeviceTypes.
     * @example
     * // Create many DeviceTypes
     * const deviceType = await prisma.deviceType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeviceTypes and only return the `id`
     * const deviceTypeWithIdOnly = await prisma.deviceType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DeviceType.
     * @param {DeviceTypeDeleteArgs} args - Arguments to delete one DeviceType.
     * @example
     * // Delete one DeviceType
     * const DeviceType = await prisma.deviceType.delete({
     *   where: {
     *     // ... filter to delete one DeviceType
     *   }
     * })
     * 
     */
    delete<T extends DeviceTypeDeleteArgs>(args: SelectSubset<T, DeviceTypeDeleteArgs<ExtArgs>>): Prisma__DeviceTypeClient<$Result.GetResult<Prisma.$DeviceTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeviceType.
     * @param {DeviceTypeUpdateArgs} args - Arguments to update one DeviceType.
     * @example
     * // Update one DeviceType
     * const deviceType = await prisma.deviceType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceTypeUpdateArgs>(args: SelectSubset<T, DeviceTypeUpdateArgs<ExtArgs>>): Prisma__DeviceTypeClient<$Result.GetResult<Prisma.$DeviceTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeviceTypes.
     * @param {DeviceTypeDeleteManyArgs} args - Arguments to filter DeviceTypes to delete.
     * @example
     * // Delete a few DeviceTypes
     * const { count } = await prisma.deviceType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceTypeDeleteManyArgs>(args?: SelectSubset<T, DeviceTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeviceTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeviceTypes
     * const deviceType = await prisma.deviceType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceTypeUpdateManyArgs>(args: SelectSubset<T, DeviceTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeviceTypes and returns the data updated in the database.
     * @param {DeviceTypeUpdateManyAndReturnArgs} args - Arguments to update many DeviceTypes.
     * @example
     * // Update many DeviceTypes
     * const deviceType = await prisma.deviceType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DeviceTypes and only return the `id`
     * const deviceTypeWithIdOnly = await prisma.deviceType.updateManyAndReturn({
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
    updateManyAndReturn<T extends DeviceTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, DeviceTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DeviceType.
     * @param {DeviceTypeUpsertArgs} args - Arguments to update or create a DeviceType.
     * @example
     * // Update or create a DeviceType
     * const deviceType = await prisma.deviceType.upsert({
     *   create: {
     *     // ... data to create a DeviceType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeviceType we want to update
     *   }
     * })
     */
    upsert<T extends DeviceTypeUpsertArgs>(args: SelectSubset<T, DeviceTypeUpsertArgs<ExtArgs>>): Prisma__DeviceTypeClient<$Result.GetResult<Prisma.$DeviceTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeviceTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTypeCountArgs} args - Arguments to filter DeviceTypes to count.
     * @example
     * // Count the number of DeviceTypes
     * const count = await prisma.deviceType.count({
     *   where: {
     *     // ... the filter for the DeviceTypes we want to count
     *   }
     * })
    **/
    count<T extends DeviceTypeCountArgs>(
      args?: Subset<T, DeviceTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeviceType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceTypeAggregateArgs>(args: Subset<T, DeviceTypeAggregateArgs>): Prisma.PrismaPromise<GetDeviceTypeAggregateType<T>>

    /**
     * Group by DeviceType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTypeGroupByArgs} args - Group by arguments.
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
      T extends DeviceTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceTypeGroupByArgs['orderBy'] }
        : { orderBy?: DeviceTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeviceTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeviceType model
   */
  readonly fields: DeviceTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeviceType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    devices<T extends DeviceType$devicesArgs<ExtArgs> = {}>(args?: Subset<T, DeviceType$devicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DeviceType model
   */
  interface DeviceTypeFieldRefs {
    readonly id: FieldRef<"DeviceType", 'Int'>
    readonly title: FieldRef<"DeviceType", 'String'>
    readonly description: FieldRef<"DeviceType", 'String'>
    readonly attributes: FieldRef<"DeviceType", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * DeviceType findUnique
   */
  export type DeviceTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceType
     */
    select?: DeviceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceType
     */
    omit?: DeviceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTypeInclude<ExtArgs> | null
    /**
     * Filter, which DeviceType to fetch.
     */
    where: DeviceTypeWhereUniqueInput
  }

  /**
   * DeviceType findUniqueOrThrow
   */
  export type DeviceTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceType
     */
    select?: DeviceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceType
     */
    omit?: DeviceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTypeInclude<ExtArgs> | null
    /**
     * Filter, which DeviceType to fetch.
     */
    where: DeviceTypeWhereUniqueInput
  }

  /**
   * DeviceType findFirst
   */
  export type DeviceTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceType
     */
    select?: DeviceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceType
     */
    omit?: DeviceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTypeInclude<ExtArgs> | null
    /**
     * Filter, which DeviceType to fetch.
     */
    where?: DeviceTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceTypes to fetch.
     */
    orderBy?: DeviceTypeOrderByWithRelationInput | DeviceTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceTypes.
     */
    cursor?: DeviceTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceTypes.
     */
    distinct?: DeviceTypeScalarFieldEnum | DeviceTypeScalarFieldEnum[]
  }

  /**
   * DeviceType findFirstOrThrow
   */
  export type DeviceTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceType
     */
    select?: DeviceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceType
     */
    omit?: DeviceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTypeInclude<ExtArgs> | null
    /**
     * Filter, which DeviceType to fetch.
     */
    where?: DeviceTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceTypes to fetch.
     */
    orderBy?: DeviceTypeOrderByWithRelationInput | DeviceTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceTypes.
     */
    cursor?: DeviceTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceTypes.
     */
    distinct?: DeviceTypeScalarFieldEnum | DeviceTypeScalarFieldEnum[]
  }

  /**
   * DeviceType findMany
   */
  export type DeviceTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceType
     */
    select?: DeviceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceType
     */
    omit?: DeviceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTypeInclude<ExtArgs> | null
    /**
     * Filter, which DeviceTypes to fetch.
     */
    where?: DeviceTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceTypes to fetch.
     */
    orderBy?: DeviceTypeOrderByWithRelationInput | DeviceTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeviceTypes.
     */
    cursor?: DeviceTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceTypes.
     */
    skip?: number
    distinct?: DeviceTypeScalarFieldEnum | DeviceTypeScalarFieldEnum[]
  }

  /**
   * DeviceType create
   */
  export type DeviceTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceType
     */
    select?: DeviceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceType
     */
    omit?: DeviceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a DeviceType.
     */
    data: XOR<DeviceTypeCreateInput, DeviceTypeUncheckedCreateInput>
  }

  /**
   * DeviceType createMany
   */
  export type DeviceTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeviceTypes.
     */
    data: DeviceTypeCreateManyInput | DeviceTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeviceType createManyAndReturn
   */
  export type DeviceTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceType
     */
    select?: DeviceTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceType
     */
    omit?: DeviceTypeOmit<ExtArgs> | null
    /**
     * The data used to create many DeviceTypes.
     */
    data: DeviceTypeCreateManyInput | DeviceTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeviceType update
   */
  export type DeviceTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceType
     */
    select?: DeviceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceType
     */
    omit?: DeviceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a DeviceType.
     */
    data: XOR<DeviceTypeUpdateInput, DeviceTypeUncheckedUpdateInput>
    /**
     * Choose, which DeviceType to update.
     */
    where: DeviceTypeWhereUniqueInput
  }

  /**
   * DeviceType updateMany
   */
  export type DeviceTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeviceTypes.
     */
    data: XOR<DeviceTypeUpdateManyMutationInput, DeviceTypeUncheckedUpdateManyInput>
    /**
     * Filter which DeviceTypes to update
     */
    where?: DeviceTypeWhereInput
    /**
     * Limit how many DeviceTypes to update.
     */
    limit?: number
  }

  /**
   * DeviceType updateManyAndReturn
   */
  export type DeviceTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceType
     */
    select?: DeviceTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceType
     */
    omit?: DeviceTypeOmit<ExtArgs> | null
    /**
     * The data used to update DeviceTypes.
     */
    data: XOR<DeviceTypeUpdateManyMutationInput, DeviceTypeUncheckedUpdateManyInput>
    /**
     * Filter which DeviceTypes to update
     */
    where?: DeviceTypeWhereInput
    /**
     * Limit how many DeviceTypes to update.
     */
    limit?: number
  }

  /**
   * DeviceType upsert
   */
  export type DeviceTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceType
     */
    select?: DeviceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceType
     */
    omit?: DeviceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the DeviceType to update in case it exists.
     */
    where: DeviceTypeWhereUniqueInput
    /**
     * In case the DeviceType found by the `where` argument doesn't exist, create a new DeviceType with this data.
     */
    create: XOR<DeviceTypeCreateInput, DeviceTypeUncheckedCreateInput>
    /**
     * In case the DeviceType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceTypeUpdateInput, DeviceTypeUncheckedUpdateInput>
  }

  /**
   * DeviceType delete
   */
  export type DeviceTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceType
     */
    select?: DeviceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceType
     */
    omit?: DeviceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTypeInclude<ExtArgs> | null
    /**
     * Filter which DeviceType to delete.
     */
    where: DeviceTypeWhereUniqueInput
  }

  /**
   * DeviceType deleteMany
   */
  export type DeviceTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceTypes to delete
     */
    where?: DeviceTypeWhereInput
    /**
     * Limit how many DeviceTypes to delete.
     */
    limit?: number
  }

  /**
   * DeviceType.devices
   */
  export type DeviceType$devicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    cursor?: DeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * DeviceType without action
   */
  export type DeviceTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceType
     */
    select?: DeviceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceType
     */
    omit?: DeviceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTypeInclude<ExtArgs> | null
  }


  /**
   * Model SensorType
   */

  export type AggregateSensorType = {
    _count: SensorTypeCountAggregateOutputType | null
    _avg: SensorTypeAvgAggregateOutputType | null
    _sum: SensorTypeSumAggregateOutputType | null
    _min: SensorTypeMinAggregateOutputType | null
    _max: SensorTypeMaxAggregateOutputType | null
  }

  export type SensorTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type SensorTypeSumAggregateOutputType = {
    id: number | null
  }

  export type SensorTypeMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
  }

  export type SensorTypeMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
  }

  export type SensorTypeCountAggregateOutputType = {
    id: number
    title: number
    description: number
    attributes: number
    _all: number
  }


  export type SensorTypeAvgAggregateInputType = {
    id?: true
  }

  export type SensorTypeSumAggregateInputType = {
    id?: true
  }

  export type SensorTypeMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
  }

  export type SensorTypeMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
  }

  export type SensorTypeCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    attributes?: true
    _all?: true
  }

  export type SensorTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SensorType to aggregate.
     */
    where?: SensorTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SensorTypes to fetch.
     */
    orderBy?: SensorTypeOrderByWithRelationInput | SensorTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SensorTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SensorTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SensorTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SensorTypes
    **/
    _count?: true | SensorTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SensorTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SensorTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SensorTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SensorTypeMaxAggregateInputType
  }

  export type GetSensorTypeAggregateType<T extends SensorTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateSensorType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSensorType[P]>
      : GetScalarType<T[P], AggregateSensorType[P]>
  }




  export type SensorTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SensorTypeWhereInput
    orderBy?: SensorTypeOrderByWithAggregationInput | SensorTypeOrderByWithAggregationInput[]
    by: SensorTypeScalarFieldEnum[] | SensorTypeScalarFieldEnum
    having?: SensorTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SensorTypeCountAggregateInputType | true
    _avg?: SensorTypeAvgAggregateInputType
    _sum?: SensorTypeSumAggregateInputType
    _min?: SensorTypeMinAggregateInputType
    _max?: SensorTypeMaxAggregateInputType
  }

  export type SensorTypeGroupByOutputType = {
    id: number
    title: string
    description: string | null
    attributes: JsonValue | null
    _count: SensorTypeCountAggregateOutputType | null
    _avg: SensorTypeAvgAggregateOutputType | null
    _sum: SensorTypeSumAggregateOutputType | null
    _min: SensorTypeMinAggregateOutputType | null
    _max: SensorTypeMaxAggregateOutputType | null
  }

  type GetSensorTypeGroupByPayload<T extends SensorTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SensorTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SensorTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SensorTypeGroupByOutputType[P]>
            : GetScalarType<T[P], SensorTypeGroupByOutputType[P]>
        }
      >
    >


  export type SensorTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    attributes?: boolean
    sensors?: boolean | SensorType$sensorsArgs<ExtArgs>
    _count?: boolean | SensorTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sensorType"]>

  export type SensorTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    attributes?: boolean
  }, ExtArgs["result"]["sensorType"]>

  export type SensorTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    attributes?: boolean
  }, ExtArgs["result"]["sensorType"]>

  export type SensorTypeSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    attributes?: boolean
  }

  export type SensorTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "attributes", ExtArgs["result"]["sensorType"]>
  export type SensorTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sensors?: boolean | SensorType$sensorsArgs<ExtArgs>
    _count?: boolean | SensorTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SensorTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SensorTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SensorTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SensorType"
    objects: {
      sensors: Prisma.$SensorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      attributes: Prisma.JsonValue | null
    }, ExtArgs["result"]["sensorType"]>
    composites: {}
  }

  type SensorTypeGetPayload<S extends boolean | null | undefined | SensorTypeDefaultArgs> = $Result.GetResult<Prisma.$SensorTypePayload, S>

  type SensorTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SensorTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SensorTypeCountAggregateInputType | true
    }

  export interface SensorTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SensorType'], meta: { name: 'SensorType' } }
    /**
     * Find zero or one SensorType that matches the filter.
     * @param {SensorTypeFindUniqueArgs} args - Arguments to find a SensorType
     * @example
     * // Get one SensorType
     * const sensorType = await prisma.sensorType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SensorTypeFindUniqueArgs>(args: SelectSubset<T, SensorTypeFindUniqueArgs<ExtArgs>>): Prisma__SensorTypeClient<$Result.GetResult<Prisma.$SensorTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SensorType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SensorTypeFindUniqueOrThrowArgs} args - Arguments to find a SensorType
     * @example
     * // Get one SensorType
     * const sensorType = await prisma.sensorType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SensorTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, SensorTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SensorTypeClient<$Result.GetResult<Prisma.$SensorTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SensorType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorTypeFindFirstArgs} args - Arguments to find a SensorType
     * @example
     * // Get one SensorType
     * const sensorType = await prisma.sensorType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SensorTypeFindFirstArgs>(args?: SelectSubset<T, SensorTypeFindFirstArgs<ExtArgs>>): Prisma__SensorTypeClient<$Result.GetResult<Prisma.$SensorTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SensorType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorTypeFindFirstOrThrowArgs} args - Arguments to find a SensorType
     * @example
     * // Get one SensorType
     * const sensorType = await prisma.sensorType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SensorTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, SensorTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__SensorTypeClient<$Result.GetResult<Prisma.$SensorTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SensorTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SensorTypes
     * const sensorTypes = await prisma.sensorType.findMany()
     * 
     * // Get first 10 SensorTypes
     * const sensorTypes = await prisma.sensorType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sensorTypeWithIdOnly = await prisma.sensorType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SensorTypeFindManyArgs>(args?: SelectSubset<T, SensorTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SensorType.
     * @param {SensorTypeCreateArgs} args - Arguments to create a SensorType.
     * @example
     * // Create one SensorType
     * const SensorType = await prisma.sensorType.create({
     *   data: {
     *     // ... data to create a SensorType
     *   }
     * })
     * 
     */
    create<T extends SensorTypeCreateArgs>(args: SelectSubset<T, SensorTypeCreateArgs<ExtArgs>>): Prisma__SensorTypeClient<$Result.GetResult<Prisma.$SensorTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SensorTypes.
     * @param {SensorTypeCreateManyArgs} args - Arguments to create many SensorTypes.
     * @example
     * // Create many SensorTypes
     * const sensorType = await prisma.sensorType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SensorTypeCreateManyArgs>(args?: SelectSubset<T, SensorTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SensorTypes and returns the data saved in the database.
     * @param {SensorTypeCreateManyAndReturnArgs} args - Arguments to create many SensorTypes.
     * @example
     * // Create many SensorTypes
     * const sensorType = await prisma.sensorType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SensorTypes and only return the `id`
     * const sensorTypeWithIdOnly = await prisma.sensorType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SensorTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, SensorTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SensorType.
     * @param {SensorTypeDeleteArgs} args - Arguments to delete one SensorType.
     * @example
     * // Delete one SensorType
     * const SensorType = await prisma.sensorType.delete({
     *   where: {
     *     // ... filter to delete one SensorType
     *   }
     * })
     * 
     */
    delete<T extends SensorTypeDeleteArgs>(args: SelectSubset<T, SensorTypeDeleteArgs<ExtArgs>>): Prisma__SensorTypeClient<$Result.GetResult<Prisma.$SensorTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SensorType.
     * @param {SensorTypeUpdateArgs} args - Arguments to update one SensorType.
     * @example
     * // Update one SensorType
     * const sensorType = await prisma.sensorType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SensorTypeUpdateArgs>(args: SelectSubset<T, SensorTypeUpdateArgs<ExtArgs>>): Prisma__SensorTypeClient<$Result.GetResult<Prisma.$SensorTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SensorTypes.
     * @param {SensorTypeDeleteManyArgs} args - Arguments to filter SensorTypes to delete.
     * @example
     * // Delete a few SensorTypes
     * const { count } = await prisma.sensorType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SensorTypeDeleteManyArgs>(args?: SelectSubset<T, SensorTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SensorTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SensorTypes
     * const sensorType = await prisma.sensorType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SensorTypeUpdateManyArgs>(args: SelectSubset<T, SensorTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SensorTypes and returns the data updated in the database.
     * @param {SensorTypeUpdateManyAndReturnArgs} args - Arguments to update many SensorTypes.
     * @example
     * // Update many SensorTypes
     * const sensorType = await prisma.sensorType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SensorTypes and only return the `id`
     * const sensorTypeWithIdOnly = await prisma.sensorType.updateManyAndReturn({
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
    updateManyAndReturn<T extends SensorTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, SensorTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SensorType.
     * @param {SensorTypeUpsertArgs} args - Arguments to update or create a SensorType.
     * @example
     * // Update or create a SensorType
     * const sensorType = await prisma.sensorType.upsert({
     *   create: {
     *     // ... data to create a SensorType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SensorType we want to update
     *   }
     * })
     */
    upsert<T extends SensorTypeUpsertArgs>(args: SelectSubset<T, SensorTypeUpsertArgs<ExtArgs>>): Prisma__SensorTypeClient<$Result.GetResult<Prisma.$SensorTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SensorTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorTypeCountArgs} args - Arguments to filter SensorTypes to count.
     * @example
     * // Count the number of SensorTypes
     * const count = await prisma.sensorType.count({
     *   where: {
     *     // ... the filter for the SensorTypes we want to count
     *   }
     * })
    **/
    count<T extends SensorTypeCountArgs>(
      args?: Subset<T, SensorTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SensorTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SensorType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SensorTypeAggregateArgs>(args: Subset<T, SensorTypeAggregateArgs>): Prisma.PrismaPromise<GetSensorTypeAggregateType<T>>

    /**
     * Group by SensorType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorTypeGroupByArgs} args - Group by arguments.
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
      T extends SensorTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SensorTypeGroupByArgs['orderBy'] }
        : { orderBy?: SensorTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SensorTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSensorTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SensorType model
   */
  readonly fields: SensorTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SensorType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SensorTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sensors<T extends SensorType$sensorsArgs<ExtArgs> = {}>(args?: Subset<T, SensorType$sensorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SensorType model
   */
  interface SensorTypeFieldRefs {
    readonly id: FieldRef<"SensorType", 'Int'>
    readonly title: FieldRef<"SensorType", 'String'>
    readonly description: FieldRef<"SensorType", 'String'>
    readonly attributes: FieldRef<"SensorType", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * SensorType findUnique
   */
  export type SensorTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorType
     */
    select?: SensorTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorType
     */
    omit?: SensorTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorTypeInclude<ExtArgs> | null
    /**
     * Filter, which SensorType to fetch.
     */
    where: SensorTypeWhereUniqueInput
  }

  /**
   * SensorType findUniqueOrThrow
   */
  export type SensorTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorType
     */
    select?: SensorTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorType
     */
    omit?: SensorTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorTypeInclude<ExtArgs> | null
    /**
     * Filter, which SensorType to fetch.
     */
    where: SensorTypeWhereUniqueInput
  }

  /**
   * SensorType findFirst
   */
  export type SensorTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorType
     */
    select?: SensorTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorType
     */
    omit?: SensorTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorTypeInclude<ExtArgs> | null
    /**
     * Filter, which SensorType to fetch.
     */
    where?: SensorTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SensorTypes to fetch.
     */
    orderBy?: SensorTypeOrderByWithRelationInput | SensorTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SensorTypes.
     */
    cursor?: SensorTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SensorTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SensorTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SensorTypes.
     */
    distinct?: SensorTypeScalarFieldEnum | SensorTypeScalarFieldEnum[]
  }

  /**
   * SensorType findFirstOrThrow
   */
  export type SensorTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorType
     */
    select?: SensorTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorType
     */
    omit?: SensorTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorTypeInclude<ExtArgs> | null
    /**
     * Filter, which SensorType to fetch.
     */
    where?: SensorTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SensorTypes to fetch.
     */
    orderBy?: SensorTypeOrderByWithRelationInput | SensorTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SensorTypes.
     */
    cursor?: SensorTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SensorTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SensorTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SensorTypes.
     */
    distinct?: SensorTypeScalarFieldEnum | SensorTypeScalarFieldEnum[]
  }

  /**
   * SensorType findMany
   */
  export type SensorTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorType
     */
    select?: SensorTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorType
     */
    omit?: SensorTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorTypeInclude<ExtArgs> | null
    /**
     * Filter, which SensorTypes to fetch.
     */
    where?: SensorTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SensorTypes to fetch.
     */
    orderBy?: SensorTypeOrderByWithRelationInput | SensorTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SensorTypes.
     */
    cursor?: SensorTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SensorTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SensorTypes.
     */
    skip?: number
    distinct?: SensorTypeScalarFieldEnum | SensorTypeScalarFieldEnum[]
  }

  /**
   * SensorType create
   */
  export type SensorTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorType
     */
    select?: SensorTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorType
     */
    omit?: SensorTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a SensorType.
     */
    data: XOR<SensorTypeCreateInput, SensorTypeUncheckedCreateInput>
  }

  /**
   * SensorType createMany
   */
  export type SensorTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SensorTypes.
     */
    data: SensorTypeCreateManyInput | SensorTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SensorType createManyAndReturn
   */
  export type SensorTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorType
     */
    select?: SensorTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SensorType
     */
    omit?: SensorTypeOmit<ExtArgs> | null
    /**
     * The data used to create many SensorTypes.
     */
    data: SensorTypeCreateManyInput | SensorTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SensorType update
   */
  export type SensorTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorType
     */
    select?: SensorTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorType
     */
    omit?: SensorTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a SensorType.
     */
    data: XOR<SensorTypeUpdateInput, SensorTypeUncheckedUpdateInput>
    /**
     * Choose, which SensorType to update.
     */
    where: SensorTypeWhereUniqueInput
  }

  /**
   * SensorType updateMany
   */
  export type SensorTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SensorTypes.
     */
    data: XOR<SensorTypeUpdateManyMutationInput, SensorTypeUncheckedUpdateManyInput>
    /**
     * Filter which SensorTypes to update
     */
    where?: SensorTypeWhereInput
    /**
     * Limit how many SensorTypes to update.
     */
    limit?: number
  }

  /**
   * SensorType updateManyAndReturn
   */
  export type SensorTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorType
     */
    select?: SensorTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SensorType
     */
    omit?: SensorTypeOmit<ExtArgs> | null
    /**
     * The data used to update SensorTypes.
     */
    data: XOR<SensorTypeUpdateManyMutationInput, SensorTypeUncheckedUpdateManyInput>
    /**
     * Filter which SensorTypes to update
     */
    where?: SensorTypeWhereInput
    /**
     * Limit how many SensorTypes to update.
     */
    limit?: number
  }

  /**
   * SensorType upsert
   */
  export type SensorTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorType
     */
    select?: SensorTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorType
     */
    omit?: SensorTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the SensorType to update in case it exists.
     */
    where: SensorTypeWhereUniqueInput
    /**
     * In case the SensorType found by the `where` argument doesn't exist, create a new SensorType with this data.
     */
    create: XOR<SensorTypeCreateInput, SensorTypeUncheckedCreateInput>
    /**
     * In case the SensorType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SensorTypeUpdateInput, SensorTypeUncheckedUpdateInput>
  }

  /**
   * SensorType delete
   */
  export type SensorTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorType
     */
    select?: SensorTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorType
     */
    omit?: SensorTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorTypeInclude<ExtArgs> | null
    /**
     * Filter which SensorType to delete.
     */
    where: SensorTypeWhereUniqueInput
  }

  /**
   * SensorType deleteMany
   */
  export type SensorTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SensorTypes to delete
     */
    where?: SensorTypeWhereInput
    /**
     * Limit how many SensorTypes to delete.
     */
    limit?: number
  }

  /**
   * SensorType.sensors
   */
  export type SensorType$sensorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    where?: SensorWhereInput
    orderBy?: SensorOrderByWithRelationInput | SensorOrderByWithRelationInput[]
    cursor?: SensorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SensorScalarFieldEnum | SensorScalarFieldEnum[]
  }

  /**
   * SensorType without action
   */
  export type SensorTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorType
     */
    select?: SensorTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorType
     */
    omit?: SensorTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorTypeInclude<ExtArgs> | null
  }


  /**
   * Model SensorMetrics
   */

  export type AggregateSensorMetrics = {
    _count: SensorMetricsCountAggregateOutputType | null
    _avg: SensorMetricsAvgAggregateOutputType | null
    _sum: SensorMetricsSumAggregateOutputType | null
    _min: SensorMetricsMinAggregateOutputType | null
    _max: SensorMetricsMaxAggregateOutputType | null
  }

  export type SensorMetricsAvgAggregateOutputType = {
    sensorId: number | null
  }

  export type SensorMetricsSumAggregateOutputType = {
    sensorId: number | null
  }

  export type SensorMetricsMinAggregateOutputType = {
    datetime: Date | null
    sensorId: number | null
  }

  export type SensorMetricsMaxAggregateOutputType = {
    datetime: Date | null
    sensorId: number | null
  }

  export type SensorMetricsCountAggregateOutputType = {
    datetime: number
    value: number
    sensorId: number
    _all: number
  }


  export type SensorMetricsAvgAggregateInputType = {
    sensorId?: true
  }

  export type SensorMetricsSumAggregateInputType = {
    sensorId?: true
  }

  export type SensorMetricsMinAggregateInputType = {
    datetime?: true
    sensorId?: true
  }

  export type SensorMetricsMaxAggregateInputType = {
    datetime?: true
    sensorId?: true
  }

  export type SensorMetricsCountAggregateInputType = {
    datetime?: true
    value?: true
    sensorId?: true
    _all?: true
  }

  export type SensorMetricsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SensorMetrics to aggregate.
     */
    where?: SensorMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SensorMetrics to fetch.
     */
    orderBy?: SensorMetricsOrderByWithRelationInput | SensorMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SensorMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SensorMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SensorMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SensorMetrics
    **/
    _count?: true | SensorMetricsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SensorMetricsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SensorMetricsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SensorMetricsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SensorMetricsMaxAggregateInputType
  }

  export type GetSensorMetricsAggregateType<T extends SensorMetricsAggregateArgs> = {
        [P in keyof T & keyof AggregateSensorMetrics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSensorMetrics[P]>
      : GetScalarType<T[P], AggregateSensorMetrics[P]>
  }




  export type SensorMetricsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SensorMetricsWhereInput
    orderBy?: SensorMetricsOrderByWithAggregationInput | SensorMetricsOrderByWithAggregationInput[]
    by: SensorMetricsScalarFieldEnum[] | SensorMetricsScalarFieldEnum
    having?: SensorMetricsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SensorMetricsCountAggregateInputType | true
    _avg?: SensorMetricsAvgAggregateInputType
    _sum?: SensorMetricsSumAggregateInputType
    _min?: SensorMetricsMinAggregateInputType
    _max?: SensorMetricsMaxAggregateInputType
  }

  export type SensorMetricsGroupByOutputType = {
    datetime: Date
    value: JsonValue
    sensorId: number
    _count: SensorMetricsCountAggregateOutputType | null
    _avg: SensorMetricsAvgAggregateOutputType | null
    _sum: SensorMetricsSumAggregateOutputType | null
    _min: SensorMetricsMinAggregateOutputType | null
    _max: SensorMetricsMaxAggregateOutputType | null
  }

  type GetSensorMetricsGroupByPayload<T extends SensorMetricsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SensorMetricsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SensorMetricsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SensorMetricsGroupByOutputType[P]>
            : GetScalarType<T[P], SensorMetricsGroupByOutputType[P]>
        }
      >
    >


  export type SensorMetricsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    datetime?: boolean
    value?: boolean
    sensorId?: boolean
    sensor?: boolean | SensorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sensorMetrics"]>

  export type SensorMetricsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    datetime?: boolean
    value?: boolean
    sensorId?: boolean
    sensor?: boolean | SensorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sensorMetrics"]>

  export type SensorMetricsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    datetime?: boolean
    value?: boolean
    sensorId?: boolean
    sensor?: boolean | SensorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sensorMetrics"]>

  export type SensorMetricsSelectScalar = {
    datetime?: boolean
    value?: boolean
    sensorId?: boolean
  }

  export type SensorMetricsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"datetime" | "value" | "sensorId", ExtArgs["result"]["sensorMetrics"]>
  export type SensorMetricsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sensor?: boolean | SensorDefaultArgs<ExtArgs>
  }
  export type SensorMetricsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sensor?: boolean | SensorDefaultArgs<ExtArgs>
  }
  export type SensorMetricsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sensor?: boolean | SensorDefaultArgs<ExtArgs>
  }

  export type $SensorMetricsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SensorMetrics"
    objects: {
      sensor: Prisma.$SensorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      datetime: Date
      value: Prisma.JsonValue
      sensorId: number
    }, ExtArgs["result"]["sensorMetrics"]>
    composites: {}
  }

  type SensorMetricsGetPayload<S extends boolean | null | undefined | SensorMetricsDefaultArgs> = $Result.GetResult<Prisma.$SensorMetricsPayload, S>

  type SensorMetricsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SensorMetricsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SensorMetricsCountAggregateInputType | true
    }

  export interface SensorMetricsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SensorMetrics'], meta: { name: 'SensorMetrics' } }
    /**
     * Find zero or one SensorMetrics that matches the filter.
     * @param {SensorMetricsFindUniqueArgs} args - Arguments to find a SensorMetrics
     * @example
     * // Get one SensorMetrics
     * const sensorMetrics = await prisma.sensorMetrics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SensorMetricsFindUniqueArgs>(args: SelectSubset<T, SensorMetricsFindUniqueArgs<ExtArgs>>): Prisma__SensorMetricsClient<$Result.GetResult<Prisma.$SensorMetricsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SensorMetrics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SensorMetricsFindUniqueOrThrowArgs} args - Arguments to find a SensorMetrics
     * @example
     * // Get one SensorMetrics
     * const sensorMetrics = await prisma.sensorMetrics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SensorMetricsFindUniqueOrThrowArgs>(args: SelectSubset<T, SensorMetricsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SensorMetricsClient<$Result.GetResult<Prisma.$SensorMetricsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SensorMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorMetricsFindFirstArgs} args - Arguments to find a SensorMetrics
     * @example
     * // Get one SensorMetrics
     * const sensorMetrics = await prisma.sensorMetrics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SensorMetricsFindFirstArgs>(args?: SelectSubset<T, SensorMetricsFindFirstArgs<ExtArgs>>): Prisma__SensorMetricsClient<$Result.GetResult<Prisma.$SensorMetricsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SensorMetrics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorMetricsFindFirstOrThrowArgs} args - Arguments to find a SensorMetrics
     * @example
     * // Get one SensorMetrics
     * const sensorMetrics = await prisma.sensorMetrics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SensorMetricsFindFirstOrThrowArgs>(args?: SelectSubset<T, SensorMetricsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SensorMetricsClient<$Result.GetResult<Prisma.$SensorMetricsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SensorMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorMetricsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SensorMetrics
     * const sensorMetrics = await prisma.sensorMetrics.findMany()
     * 
     * // Get first 10 SensorMetrics
     * const sensorMetrics = await prisma.sensorMetrics.findMany({ take: 10 })
     * 
     * // Only select the `datetime`
     * const sensorMetricsWithDatetimeOnly = await prisma.sensorMetrics.findMany({ select: { datetime: true } })
     * 
     */
    findMany<T extends SensorMetricsFindManyArgs>(args?: SelectSubset<T, SensorMetricsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorMetricsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SensorMetrics.
     * @param {SensorMetricsCreateArgs} args - Arguments to create a SensorMetrics.
     * @example
     * // Create one SensorMetrics
     * const SensorMetrics = await prisma.sensorMetrics.create({
     *   data: {
     *     // ... data to create a SensorMetrics
     *   }
     * })
     * 
     */
    create<T extends SensorMetricsCreateArgs>(args: SelectSubset<T, SensorMetricsCreateArgs<ExtArgs>>): Prisma__SensorMetricsClient<$Result.GetResult<Prisma.$SensorMetricsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SensorMetrics.
     * @param {SensorMetricsCreateManyArgs} args - Arguments to create many SensorMetrics.
     * @example
     * // Create many SensorMetrics
     * const sensorMetrics = await prisma.sensorMetrics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SensorMetricsCreateManyArgs>(args?: SelectSubset<T, SensorMetricsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SensorMetrics and returns the data saved in the database.
     * @param {SensorMetricsCreateManyAndReturnArgs} args - Arguments to create many SensorMetrics.
     * @example
     * // Create many SensorMetrics
     * const sensorMetrics = await prisma.sensorMetrics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SensorMetrics and only return the `datetime`
     * const sensorMetricsWithDatetimeOnly = await prisma.sensorMetrics.createManyAndReturn({
     *   select: { datetime: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SensorMetricsCreateManyAndReturnArgs>(args?: SelectSubset<T, SensorMetricsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorMetricsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SensorMetrics.
     * @param {SensorMetricsDeleteArgs} args - Arguments to delete one SensorMetrics.
     * @example
     * // Delete one SensorMetrics
     * const SensorMetrics = await prisma.sensorMetrics.delete({
     *   where: {
     *     // ... filter to delete one SensorMetrics
     *   }
     * })
     * 
     */
    delete<T extends SensorMetricsDeleteArgs>(args: SelectSubset<T, SensorMetricsDeleteArgs<ExtArgs>>): Prisma__SensorMetricsClient<$Result.GetResult<Prisma.$SensorMetricsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SensorMetrics.
     * @param {SensorMetricsUpdateArgs} args - Arguments to update one SensorMetrics.
     * @example
     * // Update one SensorMetrics
     * const sensorMetrics = await prisma.sensorMetrics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SensorMetricsUpdateArgs>(args: SelectSubset<T, SensorMetricsUpdateArgs<ExtArgs>>): Prisma__SensorMetricsClient<$Result.GetResult<Prisma.$SensorMetricsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SensorMetrics.
     * @param {SensorMetricsDeleteManyArgs} args - Arguments to filter SensorMetrics to delete.
     * @example
     * // Delete a few SensorMetrics
     * const { count } = await prisma.sensorMetrics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SensorMetricsDeleteManyArgs>(args?: SelectSubset<T, SensorMetricsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SensorMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorMetricsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SensorMetrics
     * const sensorMetrics = await prisma.sensorMetrics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SensorMetricsUpdateManyArgs>(args: SelectSubset<T, SensorMetricsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SensorMetrics and returns the data updated in the database.
     * @param {SensorMetricsUpdateManyAndReturnArgs} args - Arguments to update many SensorMetrics.
     * @example
     * // Update many SensorMetrics
     * const sensorMetrics = await prisma.sensorMetrics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SensorMetrics and only return the `datetime`
     * const sensorMetricsWithDatetimeOnly = await prisma.sensorMetrics.updateManyAndReturn({
     *   select: { datetime: true },
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
    updateManyAndReturn<T extends SensorMetricsUpdateManyAndReturnArgs>(args: SelectSubset<T, SensorMetricsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorMetricsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SensorMetrics.
     * @param {SensorMetricsUpsertArgs} args - Arguments to update or create a SensorMetrics.
     * @example
     * // Update or create a SensorMetrics
     * const sensorMetrics = await prisma.sensorMetrics.upsert({
     *   create: {
     *     // ... data to create a SensorMetrics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SensorMetrics we want to update
     *   }
     * })
     */
    upsert<T extends SensorMetricsUpsertArgs>(args: SelectSubset<T, SensorMetricsUpsertArgs<ExtArgs>>): Prisma__SensorMetricsClient<$Result.GetResult<Prisma.$SensorMetricsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SensorMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorMetricsCountArgs} args - Arguments to filter SensorMetrics to count.
     * @example
     * // Count the number of SensorMetrics
     * const count = await prisma.sensorMetrics.count({
     *   where: {
     *     // ... the filter for the SensorMetrics we want to count
     *   }
     * })
    **/
    count<T extends SensorMetricsCountArgs>(
      args?: Subset<T, SensorMetricsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SensorMetricsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SensorMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorMetricsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SensorMetricsAggregateArgs>(args: Subset<T, SensorMetricsAggregateArgs>): Prisma.PrismaPromise<GetSensorMetricsAggregateType<T>>

    /**
     * Group by SensorMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorMetricsGroupByArgs} args - Group by arguments.
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
      T extends SensorMetricsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SensorMetricsGroupByArgs['orderBy'] }
        : { orderBy?: SensorMetricsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SensorMetricsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSensorMetricsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SensorMetrics model
   */
  readonly fields: SensorMetricsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SensorMetrics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SensorMetricsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sensor<T extends SensorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SensorDefaultArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SensorMetrics model
   */
  interface SensorMetricsFieldRefs {
    readonly datetime: FieldRef<"SensorMetrics", 'DateTime'>
    readonly value: FieldRef<"SensorMetrics", 'Json'>
    readonly sensorId: FieldRef<"SensorMetrics", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SensorMetrics findUnique
   */
  export type SensorMetricsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorMetrics
     */
    select?: SensorMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorMetrics
     */
    omit?: SensorMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorMetricsInclude<ExtArgs> | null
    /**
     * Filter, which SensorMetrics to fetch.
     */
    where: SensorMetricsWhereUniqueInput
  }

  /**
   * SensorMetrics findUniqueOrThrow
   */
  export type SensorMetricsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorMetrics
     */
    select?: SensorMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorMetrics
     */
    omit?: SensorMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorMetricsInclude<ExtArgs> | null
    /**
     * Filter, which SensorMetrics to fetch.
     */
    where: SensorMetricsWhereUniqueInput
  }

  /**
   * SensorMetrics findFirst
   */
  export type SensorMetricsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorMetrics
     */
    select?: SensorMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorMetrics
     */
    omit?: SensorMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorMetricsInclude<ExtArgs> | null
    /**
     * Filter, which SensorMetrics to fetch.
     */
    where?: SensorMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SensorMetrics to fetch.
     */
    orderBy?: SensorMetricsOrderByWithRelationInput | SensorMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SensorMetrics.
     */
    cursor?: SensorMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SensorMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SensorMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SensorMetrics.
     */
    distinct?: SensorMetricsScalarFieldEnum | SensorMetricsScalarFieldEnum[]
  }

  /**
   * SensorMetrics findFirstOrThrow
   */
  export type SensorMetricsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorMetrics
     */
    select?: SensorMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorMetrics
     */
    omit?: SensorMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorMetricsInclude<ExtArgs> | null
    /**
     * Filter, which SensorMetrics to fetch.
     */
    where?: SensorMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SensorMetrics to fetch.
     */
    orderBy?: SensorMetricsOrderByWithRelationInput | SensorMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SensorMetrics.
     */
    cursor?: SensorMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SensorMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SensorMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SensorMetrics.
     */
    distinct?: SensorMetricsScalarFieldEnum | SensorMetricsScalarFieldEnum[]
  }

  /**
   * SensorMetrics findMany
   */
  export type SensorMetricsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorMetrics
     */
    select?: SensorMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorMetrics
     */
    omit?: SensorMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorMetricsInclude<ExtArgs> | null
    /**
     * Filter, which SensorMetrics to fetch.
     */
    where?: SensorMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SensorMetrics to fetch.
     */
    orderBy?: SensorMetricsOrderByWithRelationInput | SensorMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SensorMetrics.
     */
    cursor?: SensorMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SensorMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SensorMetrics.
     */
    skip?: number
    distinct?: SensorMetricsScalarFieldEnum | SensorMetricsScalarFieldEnum[]
  }

  /**
   * SensorMetrics create
   */
  export type SensorMetricsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorMetrics
     */
    select?: SensorMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorMetrics
     */
    omit?: SensorMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorMetricsInclude<ExtArgs> | null
    /**
     * The data needed to create a SensorMetrics.
     */
    data: XOR<SensorMetricsCreateInput, SensorMetricsUncheckedCreateInput>
  }

  /**
   * SensorMetrics createMany
   */
  export type SensorMetricsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SensorMetrics.
     */
    data: SensorMetricsCreateManyInput | SensorMetricsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SensorMetrics createManyAndReturn
   */
  export type SensorMetricsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorMetrics
     */
    select?: SensorMetricsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SensorMetrics
     */
    omit?: SensorMetricsOmit<ExtArgs> | null
    /**
     * The data used to create many SensorMetrics.
     */
    data: SensorMetricsCreateManyInput | SensorMetricsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorMetricsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SensorMetrics update
   */
  export type SensorMetricsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorMetrics
     */
    select?: SensorMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorMetrics
     */
    omit?: SensorMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorMetricsInclude<ExtArgs> | null
    /**
     * The data needed to update a SensorMetrics.
     */
    data: XOR<SensorMetricsUpdateInput, SensorMetricsUncheckedUpdateInput>
    /**
     * Choose, which SensorMetrics to update.
     */
    where: SensorMetricsWhereUniqueInput
  }

  /**
   * SensorMetrics updateMany
   */
  export type SensorMetricsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SensorMetrics.
     */
    data: XOR<SensorMetricsUpdateManyMutationInput, SensorMetricsUncheckedUpdateManyInput>
    /**
     * Filter which SensorMetrics to update
     */
    where?: SensorMetricsWhereInput
    /**
     * Limit how many SensorMetrics to update.
     */
    limit?: number
  }

  /**
   * SensorMetrics updateManyAndReturn
   */
  export type SensorMetricsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorMetrics
     */
    select?: SensorMetricsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SensorMetrics
     */
    omit?: SensorMetricsOmit<ExtArgs> | null
    /**
     * The data used to update SensorMetrics.
     */
    data: XOR<SensorMetricsUpdateManyMutationInput, SensorMetricsUncheckedUpdateManyInput>
    /**
     * Filter which SensorMetrics to update
     */
    where?: SensorMetricsWhereInput
    /**
     * Limit how many SensorMetrics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorMetricsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SensorMetrics upsert
   */
  export type SensorMetricsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorMetrics
     */
    select?: SensorMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorMetrics
     */
    omit?: SensorMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorMetricsInclude<ExtArgs> | null
    /**
     * The filter to search for the SensorMetrics to update in case it exists.
     */
    where: SensorMetricsWhereUniqueInput
    /**
     * In case the SensorMetrics found by the `where` argument doesn't exist, create a new SensorMetrics with this data.
     */
    create: XOR<SensorMetricsCreateInput, SensorMetricsUncheckedCreateInput>
    /**
     * In case the SensorMetrics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SensorMetricsUpdateInput, SensorMetricsUncheckedUpdateInput>
  }

  /**
   * SensorMetrics delete
   */
  export type SensorMetricsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorMetrics
     */
    select?: SensorMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorMetrics
     */
    omit?: SensorMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorMetricsInclude<ExtArgs> | null
    /**
     * Filter which SensorMetrics to delete.
     */
    where: SensorMetricsWhereUniqueInput
  }

  /**
   * SensorMetrics deleteMany
   */
  export type SensorMetricsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SensorMetrics to delete
     */
    where?: SensorMetricsWhereInput
    /**
     * Limit how many SensorMetrics to delete.
     */
    limit?: number
  }

  /**
   * SensorMetrics without action
   */
  export type SensorMetricsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorMetrics
     */
    select?: SensorMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorMetrics
     */
    omit?: SensorMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorMetricsInclude<ExtArgs> | null
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


  export const AppartmentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description'
  };

  export type AppartmentScalarFieldEnum = (typeof AppartmentScalarFieldEnum)[keyof typeof AppartmentScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    appartmentId: 'appartmentId'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const SensorScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    attributes: 'attributes',
    value: 'value',
    roomId: 'roomId',
    typeId: 'typeId'
  };

  export type SensorScalarFieldEnum = (typeof SensorScalarFieldEnum)[keyof typeof SensorScalarFieldEnum]


  export const DeviceScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    status: 'status',
    attributes: 'attributes',
    typeId: 'typeId',
    roomId: 'roomId'
  };

  export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum]


  export const DeviceTypeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    attributes: 'attributes'
  };

  export type DeviceTypeScalarFieldEnum = (typeof DeviceTypeScalarFieldEnum)[keyof typeof DeviceTypeScalarFieldEnum]


  export const SensorTypeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    attributes: 'attributes'
  };

  export type SensorTypeScalarFieldEnum = (typeof SensorTypeScalarFieldEnum)[keyof typeof SensorTypeScalarFieldEnum]


  export const SensorMetricsScalarFieldEnum: {
    datetime: 'datetime',
    value: 'value',
    sensorId: 'sensorId'
  };

  export type SensorMetricsScalarFieldEnum = (typeof SensorMetricsScalarFieldEnum)[keyof typeof SensorMetricsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type AppartmentWhereInput = {
    AND?: AppartmentWhereInput | AppartmentWhereInput[]
    OR?: AppartmentWhereInput[]
    NOT?: AppartmentWhereInput | AppartmentWhereInput[]
    id?: IntFilter<"Appartment"> | number
    title?: StringFilter<"Appartment"> | string
    description?: StringNullableFilter<"Appartment"> | string | null
    rooms?: RoomListRelationFilter
  }

  export type AppartmentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    rooms?: RoomOrderByRelationAggregateInput
  }

  export type AppartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AppartmentWhereInput | AppartmentWhereInput[]
    OR?: AppartmentWhereInput[]
    NOT?: AppartmentWhereInput | AppartmentWhereInput[]
    title?: StringFilter<"Appartment"> | string
    description?: StringNullableFilter<"Appartment"> | string | null
    rooms?: RoomListRelationFilter
  }, "id">

  export type AppartmentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: AppartmentCountOrderByAggregateInput
    _avg?: AppartmentAvgOrderByAggregateInput
    _max?: AppartmentMaxOrderByAggregateInput
    _min?: AppartmentMinOrderByAggregateInput
    _sum?: AppartmentSumOrderByAggregateInput
  }

  export type AppartmentScalarWhereWithAggregatesInput = {
    AND?: AppartmentScalarWhereWithAggregatesInput | AppartmentScalarWhereWithAggregatesInput[]
    OR?: AppartmentScalarWhereWithAggregatesInput[]
    NOT?: AppartmentScalarWhereWithAggregatesInput | AppartmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Appartment"> | number
    title?: StringWithAggregatesFilter<"Appartment"> | string
    description?: StringNullableWithAggregatesFilter<"Appartment"> | string | null
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: IntFilter<"Room"> | number
    title?: StringFilter<"Room"> | string
    description?: StringNullableFilter<"Room"> | string | null
    appartmentId?: IntFilter<"Room"> | number
    appartment?: XOR<AppartmentScalarRelationFilter, AppartmentWhereInput>
    Sensor?: SensorListRelationFilter
    Device?: DeviceListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    appartmentId?: SortOrder
    appartment?: AppartmentOrderByWithRelationInput
    Sensor?: SensorOrderByRelationAggregateInput
    Device?: DeviceOrderByRelationAggregateInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    title?: StringFilter<"Room"> | string
    description?: StringNullableFilter<"Room"> | string | null
    appartmentId?: IntFilter<"Room"> | number
    appartment?: XOR<AppartmentScalarRelationFilter, AppartmentWhereInput>
    Sensor?: SensorListRelationFilter
    Device?: DeviceListRelationFilter
  }, "id">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    appartmentId?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _avg?: RoomAvgOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
    _sum?: RoomSumOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Room"> | number
    title?: StringWithAggregatesFilter<"Room"> | string
    description?: StringNullableWithAggregatesFilter<"Room"> | string | null
    appartmentId?: IntWithAggregatesFilter<"Room"> | number
  }

  export type SensorWhereInput = {
    AND?: SensorWhereInput | SensorWhereInput[]
    OR?: SensorWhereInput[]
    NOT?: SensorWhereInput | SensorWhereInput[]
    id?: IntFilter<"Sensor"> | number
    title?: StringFilter<"Sensor"> | string
    description?: StringNullableFilter<"Sensor"> | string | null
    attributes?: JsonNullableFilter<"Sensor">
    value?: JsonNullableFilter<"Sensor">
    roomId?: IntFilter<"Sensor"> | number
    typeId?: IntFilter<"Sensor"> | number
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    type?: XOR<SensorTypeScalarRelationFilter, SensorTypeWhereInput>
    metrics?: SensorMetricsListRelationFilter
  }

  export type SensorOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    attributes?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    roomId?: SortOrder
    typeId?: SortOrder
    room?: RoomOrderByWithRelationInput
    type?: SensorTypeOrderByWithRelationInput
    metrics?: SensorMetricsOrderByRelationAggregateInput
  }

  export type SensorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SensorWhereInput | SensorWhereInput[]
    OR?: SensorWhereInput[]
    NOT?: SensorWhereInput | SensorWhereInput[]
    title?: StringFilter<"Sensor"> | string
    description?: StringNullableFilter<"Sensor"> | string | null
    attributes?: JsonNullableFilter<"Sensor">
    value?: JsonNullableFilter<"Sensor">
    roomId?: IntFilter<"Sensor"> | number
    typeId?: IntFilter<"Sensor"> | number
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    type?: XOR<SensorTypeScalarRelationFilter, SensorTypeWhereInput>
    metrics?: SensorMetricsListRelationFilter
  }, "id">

  export type SensorOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    attributes?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    roomId?: SortOrder
    typeId?: SortOrder
    _count?: SensorCountOrderByAggregateInput
    _avg?: SensorAvgOrderByAggregateInput
    _max?: SensorMaxOrderByAggregateInput
    _min?: SensorMinOrderByAggregateInput
    _sum?: SensorSumOrderByAggregateInput
  }

  export type SensorScalarWhereWithAggregatesInput = {
    AND?: SensorScalarWhereWithAggregatesInput | SensorScalarWhereWithAggregatesInput[]
    OR?: SensorScalarWhereWithAggregatesInput[]
    NOT?: SensorScalarWhereWithAggregatesInput | SensorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sensor"> | number
    title?: StringWithAggregatesFilter<"Sensor"> | string
    description?: StringNullableWithAggregatesFilter<"Sensor"> | string | null
    attributes?: JsonNullableWithAggregatesFilter<"Sensor">
    value?: JsonNullableWithAggregatesFilter<"Sensor">
    roomId?: IntWithAggregatesFilter<"Sensor"> | number
    typeId?: IntWithAggregatesFilter<"Sensor"> | number
  }

  export type DeviceWhereInput = {
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    id?: IntFilter<"Device"> | number
    title?: StringFilter<"Device"> | string
    description?: StringNullableFilter<"Device"> | string | null
    status?: StringNullableFilter<"Device"> | string | null
    attributes?: JsonNullableFilter<"Device">
    typeId?: IntFilter<"Device"> | number
    roomId?: IntFilter<"Device"> | number
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    type?: XOR<DeviceTypeScalarRelationFilter, DeviceTypeWhereInput>
  }

  export type DeviceOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    attributes?: SortOrderInput | SortOrder
    typeId?: SortOrder
    roomId?: SortOrder
    room?: RoomOrderByWithRelationInput
    type?: DeviceTypeOrderByWithRelationInput
  }

  export type DeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    title?: StringFilter<"Device"> | string
    description?: StringNullableFilter<"Device"> | string | null
    status?: StringNullableFilter<"Device"> | string | null
    attributes?: JsonNullableFilter<"Device">
    typeId?: IntFilter<"Device"> | number
    roomId?: IntFilter<"Device"> | number
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    type?: XOR<DeviceTypeScalarRelationFilter, DeviceTypeWhereInput>
  }, "id">

  export type DeviceOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    attributes?: SortOrderInput | SortOrder
    typeId?: SortOrder
    roomId?: SortOrder
    _count?: DeviceCountOrderByAggregateInput
    _avg?: DeviceAvgOrderByAggregateInput
    _max?: DeviceMaxOrderByAggregateInput
    _min?: DeviceMinOrderByAggregateInput
    _sum?: DeviceSumOrderByAggregateInput
  }

  export type DeviceScalarWhereWithAggregatesInput = {
    AND?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    OR?: DeviceScalarWhereWithAggregatesInput[]
    NOT?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Device"> | number
    title?: StringWithAggregatesFilter<"Device"> | string
    description?: StringNullableWithAggregatesFilter<"Device"> | string | null
    status?: StringNullableWithAggregatesFilter<"Device"> | string | null
    attributes?: JsonNullableWithAggregatesFilter<"Device">
    typeId?: IntWithAggregatesFilter<"Device"> | number
    roomId?: IntWithAggregatesFilter<"Device"> | number
  }

  export type DeviceTypeWhereInput = {
    AND?: DeviceTypeWhereInput | DeviceTypeWhereInput[]
    OR?: DeviceTypeWhereInput[]
    NOT?: DeviceTypeWhereInput | DeviceTypeWhereInput[]
    id?: IntFilter<"DeviceType"> | number
    title?: StringFilter<"DeviceType"> | string
    description?: StringNullableFilter<"DeviceType"> | string | null
    attributes?: JsonNullableFilter<"DeviceType">
    devices?: DeviceListRelationFilter
  }

  export type DeviceTypeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    attributes?: SortOrderInput | SortOrder
    devices?: DeviceOrderByRelationAggregateInput
  }

  export type DeviceTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DeviceTypeWhereInput | DeviceTypeWhereInput[]
    OR?: DeviceTypeWhereInput[]
    NOT?: DeviceTypeWhereInput | DeviceTypeWhereInput[]
    title?: StringFilter<"DeviceType"> | string
    description?: StringNullableFilter<"DeviceType"> | string | null
    attributes?: JsonNullableFilter<"DeviceType">
    devices?: DeviceListRelationFilter
  }, "id">

  export type DeviceTypeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    attributes?: SortOrderInput | SortOrder
    _count?: DeviceTypeCountOrderByAggregateInput
    _avg?: DeviceTypeAvgOrderByAggregateInput
    _max?: DeviceTypeMaxOrderByAggregateInput
    _min?: DeviceTypeMinOrderByAggregateInput
    _sum?: DeviceTypeSumOrderByAggregateInput
  }

  export type DeviceTypeScalarWhereWithAggregatesInput = {
    AND?: DeviceTypeScalarWhereWithAggregatesInput | DeviceTypeScalarWhereWithAggregatesInput[]
    OR?: DeviceTypeScalarWhereWithAggregatesInput[]
    NOT?: DeviceTypeScalarWhereWithAggregatesInput | DeviceTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DeviceType"> | number
    title?: StringWithAggregatesFilter<"DeviceType"> | string
    description?: StringNullableWithAggregatesFilter<"DeviceType"> | string | null
    attributes?: JsonNullableWithAggregatesFilter<"DeviceType">
  }

  export type SensorTypeWhereInput = {
    AND?: SensorTypeWhereInput | SensorTypeWhereInput[]
    OR?: SensorTypeWhereInput[]
    NOT?: SensorTypeWhereInput | SensorTypeWhereInput[]
    id?: IntFilter<"SensorType"> | number
    title?: StringFilter<"SensorType"> | string
    description?: StringNullableFilter<"SensorType"> | string | null
    attributes?: JsonNullableFilter<"SensorType">
    sensors?: SensorListRelationFilter
  }

  export type SensorTypeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    attributes?: SortOrderInput | SortOrder
    sensors?: SensorOrderByRelationAggregateInput
  }

  export type SensorTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SensorTypeWhereInput | SensorTypeWhereInput[]
    OR?: SensorTypeWhereInput[]
    NOT?: SensorTypeWhereInput | SensorTypeWhereInput[]
    title?: StringFilter<"SensorType"> | string
    description?: StringNullableFilter<"SensorType"> | string | null
    attributes?: JsonNullableFilter<"SensorType">
    sensors?: SensorListRelationFilter
  }, "id">

  export type SensorTypeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    attributes?: SortOrderInput | SortOrder
    _count?: SensorTypeCountOrderByAggregateInput
    _avg?: SensorTypeAvgOrderByAggregateInput
    _max?: SensorTypeMaxOrderByAggregateInput
    _min?: SensorTypeMinOrderByAggregateInput
    _sum?: SensorTypeSumOrderByAggregateInput
  }

  export type SensorTypeScalarWhereWithAggregatesInput = {
    AND?: SensorTypeScalarWhereWithAggregatesInput | SensorTypeScalarWhereWithAggregatesInput[]
    OR?: SensorTypeScalarWhereWithAggregatesInput[]
    NOT?: SensorTypeScalarWhereWithAggregatesInput | SensorTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SensorType"> | number
    title?: StringWithAggregatesFilter<"SensorType"> | string
    description?: StringNullableWithAggregatesFilter<"SensorType"> | string | null
    attributes?: JsonNullableWithAggregatesFilter<"SensorType">
  }

  export type SensorMetricsWhereInput = {
    AND?: SensorMetricsWhereInput | SensorMetricsWhereInput[]
    OR?: SensorMetricsWhereInput[]
    NOT?: SensorMetricsWhereInput | SensorMetricsWhereInput[]
    datetime?: DateTimeFilter<"SensorMetrics"> | Date | string
    value?: JsonFilter<"SensorMetrics">
    sensorId?: IntFilter<"SensorMetrics"> | number
    sensor?: XOR<SensorScalarRelationFilter, SensorWhereInput>
  }

  export type SensorMetricsOrderByWithRelationInput = {
    datetime?: SortOrder
    value?: SortOrder
    sensorId?: SortOrder
    sensor?: SensorOrderByWithRelationInput
  }

  export type SensorMetricsWhereUniqueInput = Prisma.AtLeast<{
    datetime?: Date | string
    AND?: SensorMetricsWhereInput | SensorMetricsWhereInput[]
    OR?: SensorMetricsWhereInput[]
    NOT?: SensorMetricsWhereInput | SensorMetricsWhereInput[]
    value?: JsonFilter<"SensorMetrics">
    sensorId?: IntFilter<"SensorMetrics"> | number
    sensor?: XOR<SensorScalarRelationFilter, SensorWhereInput>
  }, "datetime">

  export type SensorMetricsOrderByWithAggregationInput = {
    datetime?: SortOrder
    value?: SortOrder
    sensorId?: SortOrder
    _count?: SensorMetricsCountOrderByAggregateInput
    _avg?: SensorMetricsAvgOrderByAggregateInput
    _max?: SensorMetricsMaxOrderByAggregateInput
    _min?: SensorMetricsMinOrderByAggregateInput
    _sum?: SensorMetricsSumOrderByAggregateInput
  }

  export type SensorMetricsScalarWhereWithAggregatesInput = {
    AND?: SensorMetricsScalarWhereWithAggregatesInput | SensorMetricsScalarWhereWithAggregatesInput[]
    OR?: SensorMetricsScalarWhereWithAggregatesInput[]
    NOT?: SensorMetricsScalarWhereWithAggregatesInput | SensorMetricsScalarWhereWithAggregatesInput[]
    datetime?: DateTimeWithAggregatesFilter<"SensorMetrics"> | Date | string
    value?: JsonWithAggregatesFilter<"SensorMetrics">
    sensorId?: IntWithAggregatesFilter<"SensorMetrics"> | number
  }

  export type AppartmentCreateInput = {
    title: string
    description?: string | null
    rooms?: RoomCreateNestedManyWithoutAppartmentInput
  }

  export type AppartmentUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    rooms?: RoomUncheckedCreateNestedManyWithoutAppartmentInput
  }

  export type AppartmentUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: RoomUpdateManyWithoutAppartmentNestedInput
  }

  export type AppartmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: RoomUncheckedUpdateManyWithoutAppartmentNestedInput
  }

  export type AppartmentCreateManyInput = {
    id?: number
    title: string
    description?: string | null
  }

  export type AppartmentUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppartmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoomCreateInput = {
    title: string
    description?: string | null
    appartment: AppartmentCreateNestedOneWithoutRoomsInput
    Sensor?: SensorCreateNestedManyWithoutRoomInput
    Device?: DeviceCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    appartmentId: number
    Sensor?: SensorUncheckedCreateNestedManyWithoutRoomInput
    Device?: DeviceUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    appartment?: AppartmentUpdateOneRequiredWithoutRoomsNestedInput
    Sensor?: SensorUpdateManyWithoutRoomNestedInput
    Device?: DeviceUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    appartmentId?: IntFieldUpdateOperationsInput | number
    Sensor?: SensorUncheckedUpdateManyWithoutRoomNestedInput
    Device?: DeviceUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    appartmentId: number
  }

  export type RoomUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    appartmentId?: IntFieldUpdateOperationsInput | number
  }

  export type SensorCreateInput = {
    title: string
    description?: string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    value?: NullableJsonNullValueInput | InputJsonValue
    room: RoomCreateNestedOneWithoutSensorInput
    type: SensorTypeCreateNestedOneWithoutSensorsInput
    metrics?: SensorMetricsCreateNestedManyWithoutSensorInput
  }

  export type SensorUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    value?: NullableJsonNullValueInput | InputJsonValue
    roomId: number
    typeId: number
    metrics?: SensorMetricsUncheckedCreateNestedManyWithoutSensorInput
  }

  export type SensorUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    value?: NullableJsonNullValueInput | InputJsonValue
    room?: RoomUpdateOneRequiredWithoutSensorNestedInput
    type?: SensorTypeUpdateOneRequiredWithoutSensorsNestedInput
    metrics?: SensorMetricsUpdateManyWithoutSensorNestedInput
  }

  export type SensorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    value?: NullableJsonNullValueInput | InputJsonValue
    roomId?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
    metrics?: SensorMetricsUncheckedUpdateManyWithoutSensorNestedInput
  }

  export type SensorCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    value?: NullableJsonNullValueInput | InputJsonValue
    roomId: number
    typeId: number
  }

  export type SensorUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    value?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SensorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    value?: NullableJsonNullValueInput | InputJsonValue
    roomId?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
  }

  export type DeviceCreateInput = {
    title: string
    description?: string | null
    status?: string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    room: RoomCreateNestedOneWithoutDeviceInput
    type: DeviceTypeCreateNestedOneWithoutDevicesInput
  }

  export type DeviceUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    status?: string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    typeId: number
    roomId: number
  }

  export type DeviceUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    room?: RoomUpdateOneRequiredWithoutDeviceNestedInput
    type?: DeviceTypeUpdateOneRequiredWithoutDevicesNestedInput
  }

  export type DeviceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    typeId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
  }

  export type DeviceCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    status?: string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    typeId: number
    roomId: number
  }

  export type DeviceUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DeviceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    typeId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
  }

  export type DeviceTypeCreateInput = {
    title: string
    description?: string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    devices?: DeviceCreateNestedManyWithoutTypeInput
  }

  export type DeviceTypeUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    devices?: DeviceUncheckedCreateNestedManyWithoutTypeInput
  }

  export type DeviceTypeUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    devices?: DeviceUpdateManyWithoutTypeNestedInput
  }

  export type DeviceTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    devices?: DeviceUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type DeviceTypeCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DeviceTypeUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DeviceTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SensorTypeCreateInput = {
    title: string
    description?: string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    sensors?: SensorCreateNestedManyWithoutTypeInput
  }

  export type SensorTypeUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    sensors?: SensorUncheckedCreateNestedManyWithoutTypeInput
  }

  export type SensorTypeUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    sensors?: SensorUpdateManyWithoutTypeNestedInput
  }

  export type SensorTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    sensors?: SensorUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type SensorTypeCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SensorTypeUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SensorTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SensorMetricsCreateInput = {
    datetime?: Date | string
    value: JsonNullValueInput | InputJsonValue
    sensor: SensorCreateNestedOneWithoutMetricsInput
  }

  export type SensorMetricsUncheckedCreateInput = {
    datetime?: Date | string
    value: JsonNullValueInput | InputJsonValue
    sensorId: number
  }

  export type SensorMetricsUpdateInput = {
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: JsonNullValueInput | InputJsonValue
    sensor?: SensorUpdateOneRequiredWithoutMetricsNestedInput
  }

  export type SensorMetricsUncheckedUpdateInput = {
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: JsonNullValueInput | InputJsonValue
    sensorId?: IntFieldUpdateOperationsInput | number
  }

  export type SensorMetricsCreateManyInput = {
    datetime?: Date | string
    value: JsonNullValueInput | InputJsonValue
    sensorId: number
  }

  export type SensorMetricsUpdateManyMutationInput = {
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: JsonNullValueInput | InputJsonValue
  }

  export type SensorMetricsUncheckedUpdateManyInput = {
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: JsonNullValueInput | InputJsonValue
    sensorId?: IntFieldUpdateOperationsInput | number
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

  export type RoomListRelationFilter = {
    every?: RoomWhereInput
    some?: RoomWhereInput
    none?: RoomWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppartmentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
  }

  export type AppartmentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AppartmentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
  }

  export type AppartmentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
  }

  export type AppartmentSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type AppartmentScalarRelationFilter = {
    is?: AppartmentWhereInput
    isNot?: AppartmentWhereInput
  }

  export type SensorListRelationFilter = {
    every?: SensorWhereInput
    some?: SensorWhereInput
    none?: SensorWhereInput
  }

  export type DeviceListRelationFilter = {
    every?: DeviceWhereInput
    some?: DeviceWhereInput
    none?: DeviceWhereInput
  }

  export type SensorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeviceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    appartmentId?: SortOrder
  }

  export type RoomAvgOrderByAggregateInput = {
    id?: SortOrder
    appartmentId?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    appartmentId?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    appartmentId?: SortOrder
  }

  export type RoomSumOrderByAggregateInput = {
    id?: SortOrder
    appartmentId?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type RoomScalarRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type SensorTypeScalarRelationFilter = {
    is?: SensorTypeWhereInput
    isNot?: SensorTypeWhereInput
  }

  export type SensorMetricsListRelationFilter = {
    every?: SensorMetricsWhereInput
    some?: SensorMetricsWhereInput
    none?: SensorMetricsWhereInput
  }

  export type SensorMetricsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SensorCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    attributes?: SortOrder
    value?: SortOrder
    roomId?: SortOrder
    typeId?: SortOrder
  }

  export type SensorAvgOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    typeId?: SortOrder
  }

  export type SensorMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    roomId?: SortOrder
    typeId?: SortOrder
  }

  export type SensorMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    roomId?: SortOrder
    typeId?: SortOrder
  }

  export type SensorSumOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    typeId?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DeviceTypeScalarRelationFilter = {
    is?: DeviceTypeWhereInput
    isNot?: DeviceTypeWhereInput
  }

  export type DeviceCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    attributes?: SortOrder
    typeId?: SortOrder
    roomId?: SortOrder
  }

  export type DeviceAvgOrderByAggregateInput = {
    id?: SortOrder
    typeId?: SortOrder
    roomId?: SortOrder
  }

  export type DeviceMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    typeId?: SortOrder
    roomId?: SortOrder
  }

  export type DeviceMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    typeId?: SortOrder
    roomId?: SortOrder
  }

  export type DeviceSumOrderByAggregateInput = {
    id?: SortOrder
    typeId?: SortOrder
    roomId?: SortOrder
  }

  export type DeviceTypeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    attributes?: SortOrder
  }

  export type DeviceTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DeviceTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
  }

  export type DeviceTypeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
  }

  export type DeviceTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SensorTypeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    attributes?: SortOrder
  }

  export type SensorTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SensorTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
  }

  export type SensorTypeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
  }

  export type SensorTypeSumOrderByAggregateInput = {
    id?: SortOrder
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
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SensorScalarRelationFilter = {
    is?: SensorWhereInput
    isNot?: SensorWhereInput
  }

  export type SensorMetricsCountOrderByAggregateInput = {
    datetime?: SortOrder
    value?: SortOrder
    sensorId?: SortOrder
  }

  export type SensorMetricsAvgOrderByAggregateInput = {
    sensorId?: SortOrder
  }

  export type SensorMetricsMaxOrderByAggregateInput = {
    datetime?: SortOrder
    sensorId?: SortOrder
  }

  export type SensorMetricsMinOrderByAggregateInput = {
    datetime?: SortOrder
    sensorId?: SortOrder
  }

  export type SensorMetricsSumOrderByAggregateInput = {
    sensorId?: SortOrder
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
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type RoomCreateNestedManyWithoutAppartmentInput = {
    create?: XOR<RoomCreateWithoutAppartmentInput, RoomUncheckedCreateWithoutAppartmentInput> | RoomCreateWithoutAppartmentInput[] | RoomUncheckedCreateWithoutAppartmentInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutAppartmentInput | RoomCreateOrConnectWithoutAppartmentInput[]
    createMany?: RoomCreateManyAppartmentInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutAppartmentInput = {
    create?: XOR<RoomCreateWithoutAppartmentInput, RoomUncheckedCreateWithoutAppartmentInput> | RoomCreateWithoutAppartmentInput[] | RoomUncheckedCreateWithoutAppartmentInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutAppartmentInput | RoomCreateOrConnectWithoutAppartmentInput[]
    createMany?: RoomCreateManyAppartmentInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type RoomUpdateManyWithoutAppartmentNestedInput = {
    create?: XOR<RoomCreateWithoutAppartmentInput, RoomUncheckedCreateWithoutAppartmentInput> | RoomCreateWithoutAppartmentInput[] | RoomUncheckedCreateWithoutAppartmentInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutAppartmentInput | RoomCreateOrConnectWithoutAppartmentInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutAppartmentInput | RoomUpsertWithWhereUniqueWithoutAppartmentInput[]
    createMany?: RoomCreateManyAppartmentInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutAppartmentInput | RoomUpdateWithWhereUniqueWithoutAppartmentInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutAppartmentInput | RoomUpdateManyWithWhereWithoutAppartmentInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RoomUncheckedUpdateManyWithoutAppartmentNestedInput = {
    create?: XOR<RoomCreateWithoutAppartmentInput, RoomUncheckedCreateWithoutAppartmentInput> | RoomCreateWithoutAppartmentInput[] | RoomUncheckedCreateWithoutAppartmentInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutAppartmentInput | RoomCreateOrConnectWithoutAppartmentInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutAppartmentInput | RoomUpsertWithWhereUniqueWithoutAppartmentInput[]
    createMany?: RoomCreateManyAppartmentInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutAppartmentInput | RoomUpdateWithWhereUniqueWithoutAppartmentInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutAppartmentInput | RoomUpdateManyWithWhereWithoutAppartmentInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type AppartmentCreateNestedOneWithoutRoomsInput = {
    create?: XOR<AppartmentCreateWithoutRoomsInput, AppartmentUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: AppartmentCreateOrConnectWithoutRoomsInput
    connect?: AppartmentWhereUniqueInput
  }

  export type SensorCreateNestedManyWithoutRoomInput = {
    create?: XOR<SensorCreateWithoutRoomInput, SensorUncheckedCreateWithoutRoomInput> | SensorCreateWithoutRoomInput[] | SensorUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: SensorCreateOrConnectWithoutRoomInput | SensorCreateOrConnectWithoutRoomInput[]
    createMany?: SensorCreateManyRoomInputEnvelope
    connect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
  }

  export type DeviceCreateNestedManyWithoutRoomInput = {
    create?: XOR<DeviceCreateWithoutRoomInput, DeviceUncheckedCreateWithoutRoomInput> | DeviceCreateWithoutRoomInput[] | DeviceUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutRoomInput | DeviceCreateOrConnectWithoutRoomInput[]
    createMany?: DeviceCreateManyRoomInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type SensorUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<SensorCreateWithoutRoomInput, SensorUncheckedCreateWithoutRoomInput> | SensorCreateWithoutRoomInput[] | SensorUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: SensorCreateOrConnectWithoutRoomInput | SensorCreateOrConnectWithoutRoomInput[]
    createMany?: SensorCreateManyRoomInputEnvelope
    connect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
  }

  export type DeviceUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<DeviceCreateWithoutRoomInput, DeviceUncheckedCreateWithoutRoomInput> | DeviceCreateWithoutRoomInput[] | DeviceUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutRoomInput | DeviceCreateOrConnectWithoutRoomInput[]
    createMany?: DeviceCreateManyRoomInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type AppartmentUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<AppartmentCreateWithoutRoomsInput, AppartmentUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: AppartmentCreateOrConnectWithoutRoomsInput
    upsert?: AppartmentUpsertWithoutRoomsInput
    connect?: AppartmentWhereUniqueInput
    update?: XOR<XOR<AppartmentUpdateToOneWithWhereWithoutRoomsInput, AppartmentUpdateWithoutRoomsInput>, AppartmentUncheckedUpdateWithoutRoomsInput>
  }

  export type SensorUpdateManyWithoutRoomNestedInput = {
    create?: XOR<SensorCreateWithoutRoomInput, SensorUncheckedCreateWithoutRoomInput> | SensorCreateWithoutRoomInput[] | SensorUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: SensorCreateOrConnectWithoutRoomInput | SensorCreateOrConnectWithoutRoomInput[]
    upsert?: SensorUpsertWithWhereUniqueWithoutRoomInput | SensorUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: SensorCreateManyRoomInputEnvelope
    set?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    disconnect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    delete?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    connect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    update?: SensorUpdateWithWhereUniqueWithoutRoomInput | SensorUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: SensorUpdateManyWithWhereWithoutRoomInput | SensorUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: SensorScalarWhereInput | SensorScalarWhereInput[]
  }

  export type DeviceUpdateManyWithoutRoomNestedInput = {
    create?: XOR<DeviceCreateWithoutRoomInput, DeviceUncheckedCreateWithoutRoomInput> | DeviceCreateWithoutRoomInput[] | DeviceUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutRoomInput | DeviceCreateOrConnectWithoutRoomInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutRoomInput | DeviceUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: DeviceCreateManyRoomInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutRoomInput | DeviceUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutRoomInput | DeviceUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type SensorUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<SensorCreateWithoutRoomInput, SensorUncheckedCreateWithoutRoomInput> | SensorCreateWithoutRoomInput[] | SensorUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: SensorCreateOrConnectWithoutRoomInput | SensorCreateOrConnectWithoutRoomInput[]
    upsert?: SensorUpsertWithWhereUniqueWithoutRoomInput | SensorUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: SensorCreateManyRoomInputEnvelope
    set?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    disconnect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    delete?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    connect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    update?: SensorUpdateWithWhereUniqueWithoutRoomInput | SensorUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: SensorUpdateManyWithWhereWithoutRoomInput | SensorUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: SensorScalarWhereInput | SensorScalarWhereInput[]
  }

  export type DeviceUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<DeviceCreateWithoutRoomInput, DeviceUncheckedCreateWithoutRoomInput> | DeviceCreateWithoutRoomInput[] | DeviceUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutRoomInput | DeviceCreateOrConnectWithoutRoomInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutRoomInput | DeviceUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: DeviceCreateManyRoomInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutRoomInput | DeviceUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutRoomInput | DeviceUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type RoomCreateNestedOneWithoutSensorInput = {
    create?: XOR<RoomCreateWithoutSensorInput, RoomUncheckedCreateWithoutSensorInput>
    connectOrCreate?: RoomCreateOrConnectWithoutSensorInput
    connect?: RoomWhereUniqueInput
  }

  export type SensorTypeCreateNestedOneWithoutSensorsInput = {
    create?: XOR<SensorTypeCreateWithoutSensorsInput, SensorTypeUncheckedCreateWithoutSensorsInput>
    connectOrCreate?: SensorTypeCreateOrConnectWithoutSensorsInput
    connect?: SensorTypeWhereUniqueInput
  }

  export type SensorMetricsCreateNestedManyWithoutSensorInput = {
    create?: XOR<SensorMetricsCreateWithoutSensorInput, SensorMetricsUncheckedCreateWithoutSensorInput> | SensorMetricsCreateWithoutSensorInput[] | SensorMetricsUncheckedCreateWithoutSensorInput[]
    connectOrCreate?: SensorMetricsCreateOrConnectWithoutSensorInput | SensorMetricsCreateOrConnectWithoutSensorInput[]
    createMany?: SensorMetricsCreateManySensorInputEnvelope
    connect?: SensorMetricsWhereUniqueInput | SensorMetricsWhereUniqueInput[]
  }

  export type SensorMetricsUncheckedCreateNestedManyWithoutSensorInput = {
    create?: XOR<SensorMetricsCreateWithoutSensorInput, SensorMetricsUncheckedCreateWithoutSensorInput> | SensorMetricsCreateWithoutSensorInput[] | SensorMetricsUncheckedCreateWithoutSensorInput[]
    connectOrCreate?: SensorMetricsCreateOrConnectWithoutSensorInput | SensorMetricsCreateOrConnectWithoutSensorInput[]
    createMany?: SensorMetricsCreateManySensorInputEnvelope
    connect?: SensorMetricsWhereUniqueInput | SensorMetricsWhereUniqueInput[]
  }

  export type RoomUpdateOneRequiredWithoutSensorNestedInput = {
    create?: XOR<RoomCreateWithoutSensorInput, RoomUncheckedCreateWithoutSensorInput>
    connectOrCreate?: RoomCreateOrConnectWithoutSensorInput
    upsert?: RoomUpsertWithoutSensorInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutSensorInput, RoomUpdateWithoutSensorInput>, RoomUncheckedUpdateWithoutSensorInput>
  }

  export type SensorTypeUpdateOneRequiredWithoutSensorsNestedInput = {
    create?: XOR<SensorTypeCreateWithoutSensorsInput, SensorTypeUncheckedCreateWithoutSensorsInput>
    connectOrCreate?: SensorTypeCreateOrConnectWithoutSensorsInput
    upsert?: SensorTypeUpsertWithoutSensorsInput
    connect?: SensorTypeWhereUniqueInput
    update?: XOR<XOR<SensorTypeUpdateToOneWithWhereWithoutSensorsInput, SensorTypeUpdateWithoutSensorsInput>, SensorTypeUncheckedUpdateWithoutSensorsInput>
  }

  export type SensorMetricsUpdateManyWithoutSensorNestedInput = {
    create?: XOR<SensorMetricsCreateWithoutSensorInput, SensorMetricsUncheckedCreateWithoutSensorInput> | SensorMetricsCreateWithoutSensorInput[] | SensorMetricsUncheckedCreateWithoutSensorInput[]
    connectOrCreate?: SensorMetricsCreateOrConnectWithoutSensorInput | SensorMetricsCreateOrConnectWithoutSensorInput[]
    upsert?: SensorMetricsUpsertWithWhereUniqueWithoutSensorInput | SensorMetricsUpsertWithWhereUniqueWithoutSensorInput[]
    createMany?: SensorMetricsCreateManySensorInputEnvelope
    set?: SensorMetricsWhereUniqueInput | SensorMetricsWhereUniqueInput[]
    disconnect?: SensorMetricsWhereUniqueInput | SensorMetricsWhereUniqueInput[]
    delete?: SensorMetricsWhereUniqueInput | SensorMetricsWhereUniqueInput[]
    connect?: SensorMetricsWhereUniqueInput | SensorMetricsWhereUniqueInput[]
    update?: SensorMetricsUpdateWithWhereUniqueWithoutSensorInput | SensorMetricsUpdateWithWhereUniqueWithoutSensorInput[]
    updateMany?: SensorMetricsUpdateManyWithWhereWithoutSensorInput | SensorMetricsUpdateManyWithWhereWithoutSensorInput[]
    deleteMany?: SensorMetricsScalarWhereInput | SensorMetricsScalarWhereInput[]
  }

  export type SensorMetricsUncheckedUpdateManyWithoutSensorNestedInput = {
    create?: XOR<SensorMetricsCreateWithoutSensorInput, SensorMetricsUncheckedCreateWithoutSensorInput> | SensorMetricsCreateWithoutSensorInput[] | SensorMetricsUncheckedCreateWithoutSensorInput[]
    connectOrCreate?: SensorMetricsCreateOrConnectWithoutSensorInput | SensorMetricsCreateOrConnectWithoutSensorInput[]
    upsert?: SensorMetricsUpsertWithWhereUniqueWithoutSensorInput | SensorMetricsUpsertWithWhereUniqueWithoutSensorInput[]
    createMany?: SensorMetricsCreateManySensorInputEnvelope
    set?: SensorMetricsWhereUniqueInput | SensorMetricsWhereUniqueInput[]
    disconnect?: SensorMetricsWhereUniqueInput | SensorMetricsWhereUniqueInput[]
    delete?: SensorMetricsWhereUniqueInput | SensorMetricsWhereUniqueInput[]
    connect?: SensorMetricsWhereUniqueInput | SensorMetricsWhereUniqueInput[]
    update?: SensorMetricsUpdateWithWhereUniqueWithoutSensorInput | SensorMetricsUpdateWithWhereUniqueWithoutSensorInput[]
    updateMany?: SensorMetricsUpdateManyWithWhereWithoutSensorInput | SensorMetricsUpdateManyWithWhereWithoutSensorInput[]
    deleteMany?: SensorMetricsScalarWhereInput | SensorMetricsScalarWhereInput[]
  }

  export type RoomCreateNestedOneWithoutDeviceInput = {
    create?: XOR<RoomCreateWithoutDeviceInput, RoomUncheckedCreateWithoutDeviceInput>
    connectOrCreate?: RoomCreateOrConnectWithoutDeviceInput
    connect?: RoomWhereUniqueInput
  }

  export type DeviceTypeCreateNestedOneWithoutDevicesInput = {
    create?: XOR<DeviceTypeCreateWithoutDevicesInput, DeviceTypeUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: DeviceTypeCreateOrConnectWithoutDevicesInput
    connect?: DeviceTypeWhereUniqueInput
  }

  export type RoomUpdateOneRequiredWithoutDeviceNestedInput = {
    create?: XOR<RoomCreateWithoutDeviceInput, RoomUncheckedCreateWithoutDeviceInput>
    connectOrCreate?: RoomCreateOrConnectWithoutDeviceInput
    upsert?: RoomUpsertWithoutDeviceInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutDeviceInput, RoomUpdateWithoutDeviceInput>, RoomUncheckedUpdateWithoutDeviceInput>
  }

  export type DeviceTypeUpdateOneRequiredWithoutDevicesNestedInput = {
    create?: XOR<DeviceTypeCreateWithoutDevicesInput, DeviceTypeUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: DeviceTypeCreateOrConnectWithoutDevicesInput
    upsert?: DeviceTypeUpsertWithoutDevicesInput
    connect?: DeviceTypeWhereUniqueInput
    update?: XOR<XOR<DeviceTypeUpdateToOneWithWhereWithoutDevicesInput, DeviceTypeUpdateWithoutDevicesInput>, DeviceTypeUncheckedUpdateWithoutDevicesInput>
  }

  export type DeviceCreateNestedManyWithoutTypeInput = {
    create?: XOR<DeviceCreateWithoutTypeInput, DeviceUncheckedCreateWithoutTypeInput> | DeviceCreateWithoutTypeInput[] | DeviceUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutTypeInput | DeviceCreateOrConnectWithoutTypeInput[]
    createMany?: DeviceCreateManyTypeInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type DeviceUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<DeviceCreateWithoutTypeInput, DeviceUncheckedCreateWithoutTypeInput> | DeviceCreateWithoutTypeInput[] | DeviceUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutTypeInput | DeviceCreateOrConnectWithoutTypeInput[]
    createMany?: DeviceCreateManyTypeInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type DeviceUpdateManyWithoutTypeNestedInput = {
    create?: XOR<DeviceCreateWithoutTypeInput, DeviceUncheckedCreateWithoutTypeInput> | DeviceCreateWithoutTypeInput[] | DeviceUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutTypeInput | DeviceCreateOrConnectWithoutTypeInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutTypeInput | DeviceUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: DeviceCreateManyTypeInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutTypeInput | DeviceUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutTypeInput | DeviceUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type DeviceUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<DeviceCreateWithoutTypeInput, DeviceUncheckedCreateWithoutTypeInput> | DeviceCreateWithoutTypeInput[] | DeviceUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutTypeInput | DeviceCreateOrConnectWithoutTypeInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutTypeInput | DeviceUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: DeviceCreateManyTypeInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutTypeInput | DeviceUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutTypeInput | DeviceUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type SensorCreateNestedManyWithoutTypeInput = {
    create?: XOR<SensorCreateWithoutTypeInput, SensorUncheckedCreateWithoutTypeInput> | SensorCreateWithoutTypeInput[] | SensorUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: SensorCreateOrConnectWithoutTypeInput | SensorCreateOrConnectWithoutTypeInput[]
    createMany?: SensorCreateManyTypeInputEnvelope
    connect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
  }

  export type SensorUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<SensorCreateWithoutTypeInput, SensorUncheckedCreateWithoutTypeInput> | SensorCreateWithoutTypeInput[] | SensorUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: SensorCreateOrConnectWithoutTypeInput | SensorCreateOrConnectWithoutTypeInput[]
    createMany?: SensorCreateManyTypeInputEnvelope
    connect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
  }

  export type SensorUpdateManyWithoutTypeNestedInput = {
    create?: XOR<SensorCreateWithoutTypeInput, SensorUncheckedCreateWithoutTypeInput> | SensorCreateWithoutTypeInput[] | SensorUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: SensorCreateOrConnectWithoutTypeInput | SensorCreateOrConnectWithoutTypeInput[]
    upsert?: SensorUpsertWithWhereUniqueWithoutTypeInput | SensorUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: SensorCreateManyTypeInputEnvelope
    set?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    disconnect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    delete?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    connect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    update?: SensorUpdateWithWhereUniqueWithoutTypeInput | SensorUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: SensorUpdateManyWithWhereWithoutTypeInput | SensorUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: SensorScalarWhereInput | SensorScalarWhereInput[]
  }

  export type SensorUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<SensorCreateWithoutTypeInput, SensorUncheckedCreateWithoutTypeInput> | SensorCreateWithoutTypeInput[] | SensorUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: SensorCreateOrConnectWithoutTypeInput | SensorCreateOrConnectWithoutTypeInput[]
    upsert?: SensorUpsertWithWhereUniqueWithoutTypeInput | SensorUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: SensorCreateManyTypeInputEnvelope
    set?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    disconnect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    delete?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    connect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    update?: SensorUpdateWithWhereUniqueWithoutTypeInput | SensorUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: SensorUpdateManyWithWhereWithoutTypeInput | SensorUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: SensorScalarWhereInput | SensorScalarWhereInput[]
  }

  export type SensorCreateNestedOneWithoutMetricsInput = {
    create?: XOR<SensorCreateWithoutMetricsInput, SensorUncheckedCreateWithoutMetricsInput>
    connectOrCreate?: SensorCreateOrConnectWithoutMetricsInput
    connect?: SensorWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SensorUpdateOneRequiredWithoutMetricsNestedInput = {
    create?: XOR<SensorCreateWithoutMetricsInput, SensorUncheckedCreateWithoutMetricsInput>
    connectOrCreate?: SensorCreateOrConnectWithoutMetricsInput
    upsert?: SensorUpsertWithoutMetricsInput
    connect?: SensorWhereUniqueInput
    update?: XOR<XOR<SensorUpdateToOneWithWhereWithoutMetricsInput, SensorUpdateWithoutMetricsInput>, SensorUncheckedUpdateWithoutMetricsInput>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type RoomCreateWithoutAppartmentInput = {
    title: string
    description?: string | null
    Sensor?: SensorCreateNestedManyWithoutRoomInput
    Device?: DeviceCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutAppartmentInput = {
    id?: number
    title: string
    description?: string | null
    Sensor?: SensorUncheckedCreateNestedManyWithoutRoomInput
    Device?: DeviceUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutAppartmentInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutAppartmentInput, RoomUncheckedCreateWithoutAppartmentInput>
  }

  export type RoomCreateManyAppartmentInputEnvelope = {
    data: RoomCreateManyAppartmentInput | RoomCreateManyAppartmentInput[]
    skipDuplicates?: boolean
  }

  export type RoomUpsertWithWhereUniqueWithoutAppartmentInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutAppartmentInput, RoomUncheckedUpdateWithoutAppartmentInput>
    create: XOR<RoomCreateWithoutAppartmentInput, RoomUncheckedCreateWithoutAppartmentInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutAppartmentInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutAppartmentInput, RoomUncheckedUpdateWithoutAppartmentInput>
  }

  export type RoomUpdateManyWithWhereWithoutAppartmentInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutAppartmentInput>
  }

  export type RoomScalarWhereInput = {
    AND?: RoomScalarWhereInput | RoomScalarWhereInput[]
    OR?: RoomScalarWhereInput[]
    NOT?: RoomScalarWhereInput | RoomScalarWhereInput[]
    id?: IntFilter<"Room"> | number
    title?: StringFilter<"Room"> | string
    description?: StringNullableFilter<"Room"> | string | null
    appartmentId?: IntFilter<"Room"> | number
  }

  export type AppartmentCreateWithoutRoomsInput = {
    title: string
    description?: string | null
  }

  export type AppartmentUncheckedCreateWithoutRoomsInput = {
    id?: number
    title: string
    description?: string | null
  }

  export type AppartmentCreateOrConnectWithoutRoomsInput = {
    where: AppartmentWhereUniqueInput
    create: XOR<AppartmentCreateWithoutRoomsInput, AppartmentUncheckedCreateWithoutRoomsInput>
  }

  export type SensorCreateWithoutRoomInput = {
    title: string
    description?: string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    value?: NullableJsonNullValueInput | InputJsonValue
    type: SensorTypeCreateNestedOneWithoutSensorsInput
    metrics?: SensorMetricsCreateNestedManyWithoutSensorInput
  }

  export type SensorUncheckedCreateWithoutRoomInput = {
    id?: number
    title: string
    description?: string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    value?: NullableJsonNullValueInput | InputJsonValue
    typeId: number
    metrics?: SensorMetricsUncheckedCreateNestedManyWithoutSensorInput
  }

  export type SensorCreateOrConnectWithoutRoomInput = {
    where: SensorWhereUniqueInput
    create: XOR<SensorCreateWithoutRoomInput, SensorUncheckedCreateWithoutRoomInput>
  }

  export type SensorCreateManyRoomInputEnvelope = {
    data: SensorCreateManyRoomInput | SensorCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type DeviceCreateWithoutRoomInput = {
    title: string
    description?: string | null
    status?: string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    type: DeviceTypeCreateNestedOneWithoutDevicesInput
  }

  export type DeviceUncheckedCreateWithoutRoomInput = {
    id?: number
    title: string
    description?: string | null
    status?: string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    typeId: number
  }

  export type DeviceCreateOrConnectWithoutRoomInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutRoomInput, DeviceUncheckedCreateWithoutRoomInput>
  }

  export type DeviceCreateManyRoomInputEnvelope = {
    data: DeviceCreateManyRoomInput | DeviceCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type AppartmentUpsertWithoutRoomsInput = {
    update: XOR<AppartmentUpdateWithoutRoomsInput, AppartmentUncheckedUpdateWithoutRoomsInput>
    create: XOR<AppartmentCreateWithoutRoomsInput, AppartmentUncheckedCreateWithoutRoomsInput>
    where?: AppartmentWhereInput
  }

  export type AppartmentUpdateToOneWithWhereWithoutRoomsInput = {
    where?: AppartmentWhereInput
    data: XOR<AppartmentUpdateWithoutRoomsInput, AppartmentUncheckedUpdateWithoutRoomsInput>
  }

  export type AppartmentUpdateWithoutRoomsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppartmentUncheckedUpdateWithoutRoomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SensorUpsertWithWhereUniqueWithoutRoomInput = {
    where: SensorWhereUniqueInput
    update: XOR<SensorUpdateWithoutRoomInput, SensorUncheckedUpdateWithoutRoomInput>
    create: XOR<SensorCreateWithoutRoomInput, SensorUncheckedCreateWithoutRoomInput>
  }

  export type SensorUpdateWithWhereUniqueWithoutRoomInput = {
    where: SensorWhereUniqueInput
    data: XOR<SensorUpdateWithoutRoomInput, SensorUncheckedUpdateWithoutRoomInput>
  }

  export type SensorUpdateManyWithWhereWithoutRoomInput = {
    where: SensorScalarWhereInput
    data: XOR<SensorUpdateManyMutationInput, SensorUncheckedUpdateManyWithoutRoomInput>
  }

  export type SensorScalarWhereInput = {
    AND?: SensorScalarWhereInput | SensorScalarWhereInput[]
    OR?: SensorScalarWhereInput[]
    NOT?: SensorScalarWhereInput | SensorScalarWhereInput[]
    id?: IntFilter<"Sensor"> | number
    title?: StringFilter<"Sensor"> | string
    description?: StringNullableFilter<"Sensor"> | string | null
    attributes?: JsonNullableFilter<"Sensor">
    value?: JsonNullableFilter<"Sensor">
    roomId?: IntFilter<"Sensor"> | number
    typeId?: IntFilter<"Sensor"> | number
  }

  export type DeviceUpsertWithWhereUniqueWithoutRoomInput = {
    where: DeviceWhereUniqueInput
    update: XOR<DeviceUpdateWithoutRoomInput, DeviceUncheckedUpdateWithoutRoomInput>
    create: XOR<DeviceCreateWithoutRoomInput, DeviceUncheckedCreateWithoutRoomInput>
  }

  export type DeviceUpdateWithWhereUniqueWithoutRoomInput = {
    where: DeviceWhereUniqueInput
    data: XOR<DeviceUpdateWithoutRoomInput, DeviceUncheckedUpdateWithoutRoomInput>
  }

  export type DeviceUpdateManyWithWhereWithoutRoomInput = {
    where: DeviceScalarWhereInput
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyWithoutRoomInput>
  }

  export type DeviceScalarWhereInput = {
    AND?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    OR?: DeviceScalarWhereInput[]
    NOT?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    id?: IntFilter<"Device"> | number
    title?: StringFilter<"Device"> | string
    description?: StringNullableFilter<"Device"> | string | null
    status?: StringNullableFilter<"Device"> | string | null
    attributes?: JsonNullableFilter<"Device">
    typeId?: IntFilter<"Device"> | number
    roomId?: IntFilter<"Device"> | number
  }

  export type RoomCreateWithoutSensorInput = {
    title: string
    description?: string | null
    appartment: AppartmentCreateNestedOneWithoutRoomsInput
    Device?: DeviceCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutSensorInput = {
    id?: number
    title: string
    description?: string | null
    appartmentId: number
    Device?: DeviceUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutSensorInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutSensorInput, RoomUncheckedCreateWithoutSensorInput>
  }

  export type SensorTypeCreateWithoutSensorsInput = {
    title: string
    description?: string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SensorTypeUncheckedCreateWithoutSensorsInput = {
    id?: number
    title: string
    description?: string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SensorTypeCreateOrConnectWithoutSensorsInput = {
    where: SensorTypeWhereUniqueInput
    create: XOR<SensorTypeCreateWithoutSensorsInput, SensorTypeUncheckedCreateWithoutSensorsInput>
  }

  export type SensorMetricsCreateWithoutSensorInput = {
    datetime?: Date | string
    value: JsonNullValueInput | InputJsonValue
  }

  export type SensorMetricsUncheckedCreateWithoutSensorInput = {
    datetime?: Date | string
    value: JsonNullValueInput | InputJsonValue
  }

  export type SensorMetricsCreateOrConnectWithoutSensorInput = {
    where: SensorMetricsWhereUniqueInput
    create: XOR<SensorMetricsCreateWithoutSensorInput, SensorMetricsUncheckedCreateWithoutSensorInput>
  }

  export type SensorMetricsCreateManySensorInputEnvelope = {
    data: SensorMetricsCreateManySensorInput | SensorMetricsCreateManySensorInput[]
    skipDuplicates?: boolean
  }

  export type RoomUpsertWithoutSensorInput = {
    update: XOR<RoomUpdateWithoutSensorInput, RoomUncheckedUpdateWithoutSensorInput>
    create: XOR<RoomCreateWithoutSensorInput, RoomUncheckedCreateWithoutSensorInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutSensorInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutSensorInput, RoomUncheckedUpdateWithoutSensorInput>
  }

  export type RoomUpdateWithoutSensorInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    appartment?: AppartmentUpdateOneRequiredWithoutRoomsNestedInput
    Device?: DeviceUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutSensorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    appartmentId?: IntFieldUpdateOperationsInput | number
    Device?: DeviceUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type SensorTypeUpsertWithoutSensorsInput = {
    update: XOR<SensorTypeUpdateWithoutSensorsInput, SensorTypeUncheckedUpdateWithoutSensorsInput>
    create: XOR<SensorTypeCreateWithoutSensorsInput, SensorTypeUncheckedCreateWithoutSensorsInput>
    where?: SensorTypeWhereInput
  }

  export type SensorTypeUpdateToOneWithWhereWithoutSensorsInput = {
    where?: SensorTypeWhereInput
    data: XOR<SensorTypeUpdateWithoutSensorsInput, SensorTypeUncheckedUpdateWithoutSensorsInput>
  }

  export type SensorTypeUpdateWithoutSensorsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SensorTypeUncheckedUpdateWithoutSensorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SensorMetricsUpsertWithWhereUniqueWithoutSensorInput = {
    where: SensorMetricsWhereUniqueInput
    update: XOR<SensorMetricsUpdateWithoutSensorInput, SensorMetricsUncheckedUpdateWithoutSensorInput>
    create: XOR<SensorMetricsCreateWithoutSensorInput, SensorMetricsUncheckedCreateWithoutSensorInput>
  }

  export type SensorMetricsUpdateWithWhereUniqueWithoutSensorInput = {
    where: SensorMetricsWhereUniqueInput
    data: XOR<SensorMetricsUpdateWithoutSensorInput, SensorMetricsUncheckedUpdateWithoutSensorInput>
  }

  export type SensorMetricsUpdateManyWithWhereWithoutSensorInput = {
    where: SensorMetricsScalarWhereInput
    data: XOR<SensorMetricsUpdateManyMutationInput, SensorMetricsUncheckedUpdateManyWithoutSensorInput>
  }

  export type SensorMetricsScalarWhereInput = {
    AND?: SensorMetricsScalarWhereInput | SensorMetricsScalarWhereInput[]
    OR?: SensorMetricsScalarWhereInput[]
    NOT?: SensorMetricsScalarWhereInput | SensorMetricsScalarWhereInput[]
    datetime?: DateTimeFilter<"SensorMetrics"> | Date | string
    value?: JsonFilter<"SensorMetrics">
    sensorId?: IntFilter<"SensorMetrics"> | number
  }

  export type RoomCreateWithoutDeviceInput = {
    title: string
    description?: string | null
    appartment: AppartmentCreateNestedOneWithoutRoomsInput
    Sensor?: SensorCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutDeviceInput = {
    id?: number
    title: string
    description?: string | null
    appartmentId: number
    Sensor?: SensorUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutDeviceInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutDeviceInput, RoomUncheckedCreateWithoutDeviceInput>
  }

  export type DeviceTypeCreateWithoutDevicesInput = {
    title: string
    description?: string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DeviceTypeUncheckedCreateWithoutDevicesInput = {
    id?: number
    title: string
    description?: string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DeviceTypeCreateOrConnectWithoutDevicesInput = {
    where: DeviceTypeWhereUniqueInput
    create: XOR<DeviceTypeCreateWithoutDevicesInput, DeviceTypeUncheckedCreateWithoutDevicesInput>
  }

  export type RoomUpsertWithoutDeviceInput = {
    update: XOR<RoomUpdateWithoutDeviceInput, RoomUncheckedUpdateWithoutDeviceInput>
    create: XOR<RoomCreateWithoutDeviceInput, RoomUncheckedCreateWithoutDeviceInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutDeviceInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutDeviceInput, RoomUncheckedUpdateWithoutDeviceInput>
  }

  export type RoomUpdateWithoutDeviceInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    appartment?: AppartmentUpdateOneRequiredWithoutRoomsNestedInput
    Sensor?: SensorUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    appartmentId?: IntFieldUpdateOperationsInput | number
    Sensor?: SensorUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type DeviceTypeUpsertWithoutDevicesInput = {
    update: XOR<DeviceTypeUpdateWithoutDevicesInput, DeviceTypeUncheckedUpdateWithoutDevicesInput>
    create: XOR<DeviceTypeCreateWithoutDevicesInput, DeviceTypeUncheckedCreateWithoutDevicesInput>
    where?: DeviceTypeWhereInput
  }

  export type DeviceTypeUpdateToOneWithWhereWithoutDevicesInput = {
    where?: DeviceTypeWhereInput
    data: XOR<DeviceTypeUpdateWithoutDevicesInput, DeviceTypeUncheckedUpdateWithoutDevicesInput>
  }

  export type DeviceTypeUpdateWithoutDevicesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DeviceTypeUncheckedUpdateWithoutDevicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DeviceCreateWithoutTypeInput = {
    title: string
    description?: string | null
    status?: string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    room: RoomCreateNestedOneWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutTypeInput = {
    id?: number
    title: string
    description?: string | null
    status?: string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    roomId: number
  }

  export type DeviceCreateOrConnectWithoutTypeInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutTypeInput, DeviceUncheckedCreateWithoutTypeInput>
  }

  export type DeviceCreateManyTypeInputEnvelope = {
    data: DeviceCreateManyTypeInput | DeviceCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type DeviceUpsertWithWhereUniqueWithoutTypeInput = {
    where: DeviceWhereUniqueInput
    update: XOR<DeviceUpdateWithoutTypeInput, DeviceUncheckedUpdateWithoutTypeInput>
    create: XOR<DeviceCreateWithoutTypeInput, DeviceUncheckedCreateWithoutTypeInput>
  }

  export type DeviceUpdateWithWhereUniqueWithoutTypeInput = {
    where: DeviceWhereUniqueInput
    data: XOR<DeviceUpdateWithoutTypeInput, DeviceUncheckedUpdateWithoutTypeInput>
  }

  export type DeviceUpdateManyWithWhereWithoutTypeInput = {
    where: DeviceScalarWhereInput
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyWithoutTypeInput>
  }

  export type SensorCreateWithoutTypeInput = {
    title: string
    description?: string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    value?: NullableJsonNullValueInput | InputJsonValue
    room: RoomCreateNestedOneWithoutSensorInput
    metrics?: SensorMetricsCreateNestedManyWithoutSensorInput
  }

  export type SensorUncheckedCreateWithoutTypeInput = {
    id?: number
    title: string
    description?: string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    value?: NullableJsonNullValueInput | InputJsonValue
    roomId: number
    metrics?: SensorMetricsUncheckedCreateNestedManyWithoutSensorInput
  }

  export type SensorCreateOrConnectWithoutTypeInput = {
    where: SensorWhereUniqueInput
    create: XOR<SensorCreateWithoutTypeInput, SensorUncheckedCreateWithoutTypeInput>
  }

  export type SensorCreateManyTypeInputEnvelope = {
    data: SensorCreateManyTypeInput | SensorCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type SensorUpsertWithWhereUniqueWithoutTypeInput = {
    where: SensorWhereUniqueInput
    update: XOR<SensorUpdateWithoutTypeInput, SensorUncheckedUpdateWithoutTypeInput>
    create: XOR<SensorCreateWithoutTypeInput, SensorUncheckedCreateWithoutTypeInput>
  }

  export type SensorUpdateWithWhereUniqueWithoutTypeInput = {
    where: SensorWhereUniqueInput
    data: XOR<SensorUpdateWithoutTypeInput, SensorUncheckedUpdateWithoutTypeInput>
  }

  export type SensorUpdateManyWithWhereWithoutTypeInput = {
    where: SensorScalarWhereInput
    data: XOR<SensorUpdateManyMutationInput, SensorUncheckedUpdateManyWithoutTypeInput>
  }

  export type SensorCreateWithoutMetricsInput = {
    title: string
    description?: string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    value?: NullableJsonNullValueInput | InputJsonValue
    room: RoomCreateNestedOneWithoutSensorInput
    type: SensorTypeCreateNestedOneWithoutSensorsInput
  }

  export type SensorUncheckedCreateWithoutMetricsInput = {
    id?: number
    title: string
    description?: string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    value?: NullableJsonNullValueInput | InputJsonValue
    roomId: number
    typeId: number
  }

  export type SensorCreateOrConnectWithoutMetricsInput = {
    where: SensorWhereUniqueInput
    create: XOR<SensorCreateWithoutMetricsInput, SensorUncheckedCreateWithoutMetricsInput>
  }

  export type SensorUpsertWithoutMetricsInput = {
    update: XOR<SensorUpdateWithoutMetricsInput, SensorUncheckedUpdateWithoutMetricsInput>
    create: XOR<SensorCreateWithoutMetricsInput, SensorUncheckedCreateWithoutMetricsInput>
    where?: SensorWhereInput
  }

  export type SensorUpdateToOneWithWhereWithoutMetricsInput = {
    where?: SensorWhereInput
    data: XOR<SensorUpdateWithoutMetricsInput, SensorUncheckedUpdateWithoutMetricsInput>
  }

  export type SensorUpdateWithoutMetricsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    value?: NullableJsonNullValueInput | InputJsonValue
    room?: RoomUpdateOneRequiredWithoutSensorNestedInput
    type?: SensorTypeUpdateOneRequiredWithoutSensorsNestedInput
  }

  export type SensorUncheckedUpdateWithoutMetricsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    value?: NullableJsonNullValueInput | InputJsonValue
    roomId?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
  }

  export type RoomCreateManyAppartmentInput = {
    id?: number
    title: string
    description?: string | null
  }

  export type RoomUpdateWithoutAppartmentInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Sensor?: SensorUpdateManyWithoutRoomNestedInput
    Device?: DeviceUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutAppartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Sensor?: SensorUncheckedUpdateManyWithoutRoomNestedInput
    Device?: DeviceUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutAppartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SensorCreateManyRoomInput = {
    id?: number
    title: string
    description?: string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    value?: NullableJsonNullValueInput | InputJsonValue
    typeId: number
  }

  export type DeviceCreateManyRoomInput = {
    id?: number
    title: string
    description?: string | null
    status?: string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    typeId: number
  }

  export type SensorUpdateWithoutRoomInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    value?: NullableJsonNullValueInput | InputJsonValue
    type?: SensorTypeUpdateOneRequiredWithoutSensorsNestedInput
    metrics?: SensorMetricsUpdateManyWithoutSensorNestedInput
  }

  export type SensorUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    value?: NullableJsonNullValueInput | InputJsonValue
    typeId?: IntFieldUpdateOperationsInput | number
    metrics?: SensorMetricsUncheckedUpdateManyWithoutSensorNestedInput
  }

  export type SensorUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    value?: NullableJsonNullValueInput | InputJsonValue
    typeId?: IntFieldUpdateOperationsInput | number
  }

  export type DeviceUpdateWithoutRoomInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    type?: DeviceTypeUpdateOneRequiredWithoutDevicesNestedInput
  }

  export type DeviceUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    typeId?: IntFieldUpdateOperationsInput | number
  }

  export type DeviceUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    typeId?: IntFieldUpdateOperationsInput | number
  }

  export type SensorMetricsCreateManySensorInput = {
    datetime?: Date | string
    value: JsonNullValueInput | InputJsonValue
  }

  export type SensorMetricsUpdateWithoutSensorInput = {
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: JsonNullValueInput | InputJsonValue
  }

  export type SensorMetricsUncheckedUpdateWithoutSensorInput = {
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: JsonNullValueInput | InputJsonValue
  }

  export type SensorMetricsUncheckedUpdateManyWithoutSensorInput = {
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: JsonNullValueInput | InputJsonValue
  }

  export type DeviceCreateManyTypeInput = {
    id?: number
    title: string
    description?: string | null
    status?: string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    roomId: number
  }

  export type DeviceUpdateWithoutTypeInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    room?: RoomUpdateOneRequiredWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    roomId?: IntFieldUpdateOperationsInput | number
  }

  export type DeviceUncheckedUpdateManyWithoutTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    roomId?: IntFieldUpdateOperationsInput | number
  }

  export type SensorCreateManyTypeInput = {
    id?: number
    title: string
    description?: string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    value?: NullableJsonNullValueInput | InputJsonValue
    roomId: number
  }

  export type SensorUpdateWithoutTypeInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    value?: NullableJsonNullValueInput | InputJsonValue
    room?: RoomUpdateOneRequiredWithoutSensorNestedInput
    metrics?: SensorMetricsUpdateManyWithoutSensorNestedInput
  }

  export type SensorUncheckedUpdateWithoutTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    value?: NullableJsonNullValueInput | InputJsonValue
    roomId?: IntFieldUpdateOperationsInput | number
    metrics?: SensorMetricsUncheckedUpdateManyWithoutSensorNestedInput
  }

  export type SensorUncheckedUpdateManyWithoutTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    value?: NullableJsonNullValueInput | InputJsonValue
    roomId?: IntFieldUpdateOperationsInput | number
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