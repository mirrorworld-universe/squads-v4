/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

type ErrorWithCode = Error & { code: number }
type MaybeErrorWithCode = ErrorWithCode | null | undefined

const createErrorFromCodeLookup: Map<number, () => ErrorWithCode> = new Map()
const createErrorFromNameLookup: Map<string, () => ErrorWithCode> = new Map()

/**
 * DuplicateMember: 'Found multiple members with the same pubkey'
 *
 * @category Errors
 * @category generated
 */
export class DuplicateMemberError extends Error {
  readonly code: number = 0x1770
  readonly name: string = 'DuplicateMember'
  constructor() {
    super('Found multiple members with the same pubkey')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, DuplicateMemberError)
    }
  }
}

createErrorFromCodeLookup.set(0x1770, () => new DuplicateMemberError())
createErrorFromNameLookup.set(
  'DuplicateMember',
  () => new DuplicateMemberError()
)

/**
 * EmptyMembers: 'Members array is empty'
 *
 * @category Errors
 * @category generated
 */
export class EmptyMembersError extends Error {
  readonly code: number = 0x1771
  readonly name: string = 'EmptyMembers'
  constructor() {
    super('Members array is empty')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, EmptyMembersError)
    }
  }
}

createErrorFromCodeLookup.set(0x1771, () => new EmptyMembersError())
createErrorFromNameLookup.set('EmptyMembers', () => new EmptyMembersError())

/**
 * TooManyMembers: 'Too many members, can be up to 65535'
 *
 * @category Errors
 * @category generated
 */
export class TooManyMembersError extends Error {
  readonly code: number = 0x1772
  readonly name: string = 'TooManyMembers'
  constructor() {
    super('Too many members, can be up to 65535')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, TooManyMembersError)
    }
  }
}

createErrorFromCodeLookup.set(0x1772, () => new TooManyMembersError())
createErrorFromNameLookup.set('TooManyMembers', () => new TooManyMembersError())

/**
 * InvalidThreshold: 'Invalid threshold, must be between 1 and number of members with Vote permission'
 *
 * @category Errors
 * @category generated
 */
export class InvalidThresholdError extends Error {
  readonly code: number = 0x1773
  readonly name: string = 'InvalidThreshold'
  constructor() {
    super(
      'Invalid threshold, must be between 1 and number of members with Vote permission'
    )
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InvalidThresholdError)
    }
  }
}

createErrorFromCodeLookup.set(0x1773, () => new InvalidThresholdError())
createErrorFromNameLookup.set(
  'InvalidThreshold',
  () => new InvalidThresholdError()
)

/**
 * Unauthorized: 'Attempted to perform an unauthorized action'
 *
 * @category Errors
 * @category generated
 */
export class UnauthorizedError extends Error {
  readonly code: number = 0x1774
  readonly name: string = 'Unauthorized'
  constructor() {
    super('Attempted to perform an unauthorized action')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, UnauthorizedError)
    }
  }
}

createErrorFromCodeLookup.set(0x1774, () => new UnauthorizedError())
createErrorFromNameLookup.set('Unauthorized', () => new UnauthorizedError())

/**
 * NotAMember: 'Provided pubkey is not a member of multisig'
 *
 * @category Errors
 * @category generated
 */
export class NotAMemberError extends Error {
  readonly code: number = 0x1775
  readonly name: string = 'NotAMember'
  constructor() {
    super('Provided pubkey is not a member of multisig')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, NotAMemberError)
    }
  }
}

createErrorFromCodeLookup.set(0x1775, () => new NotAMemberError())
createErrorFromNameLookup.set('NotAMember', () => new NotAMemberError())

/**
 * InvalidTransactionMessage: 'TransactionMessage is malformed.'
 *
 * @category Errors
 * @category generated
 */
export class InvalidTransactionMessageError extends Error {
  readonly code: number = 0x1776
  readonly name: string = 'InvalidTransactionMessage'
  constructor() {
    super('TransactionMessage is malformed.')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InvalidTransactionMessageError)
    }
  }
}

createErrorFromCodeLookup.set(
  0x1776,
  () => new InvalidTransactionMessageError()
)
createErrorFromNameLookup.set(
  'InvalidTransactionMessage',
  () => new InvalidTransactionMessageError()
)

/**
 * StaleProposal: 'Proposal is stale'
 *
 * @category Errors
 * @category generated
 */
export class StaleProposalError extends Error {
  readonly code: number = 0x1777
  readonly name: string = 'StaleProposal'
  constructor() {
    super('Proposal is stale')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, StaleProposalError)
    }
  }
}

createErrorFromCodeLookup.set(0x1777, () => new StaleProposalError())
createErrorFromNameLookup.set('StaleProposal', () => new StaleProposalError())

/**
 * InvalidProposalStatus: 'Invalid proposal status'
 *
 * @category Errors
 * @category generated
 */
export class InvalidProposalStatusError extends Error {
  readonly code: number = 0x1778
  readonly name: string = 'InvalidProposalStatus'
  constructor() {
    super('Invalid proposal status')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InvalidProposalStatusError)
    }
  }
}

createErrorFromCodeLookup.set(0x1778, () => new InvalidProposalStatusError())
createErrorFromNameLookup.set(
  'InvalidProposalStatus',
  () => new InvalidProposalStatusError()
)

/**
 * InvalidTransactionIndex: 'Invalid transaction index'
 *
 * @category Errors
 * @category generated
 */
export class InvalidTransactionIndexError extends Error {
  readonly code: number = 0x1779
  readonly name: string = 'InvalidTransactionIndex'
  constructor() {
    super('Invalid transaction index')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InvalidTransactionIndexError)
    }
  }
}

createErrorFromCodeLookup.set(0x1779, () => new InvalidTransactionIndexError())
createErrorFromNameLookup.set(
  'InvalidTransactionIndex',
  () => new InvalidTransactionIndexError()
)

/**
 * AlreadyApproved: 'Member already approved the transaction'
 *
 * @category Errors
 * @category generated
 */
export class AlreadyApprovedError extends Error {
  readonly code: number = 0x177a
  readonly name: string = 'AlreadyApproved'
  constructor() {
    super('Member already approved the transaction')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, AlreadyApprovedError)
    }
  }
}

createErrorFromCodeLookup.set(0x177a, () => new AlreadyApprovedError())
createErrorFromNameLookup.set(
  'AlreadyApproved',
  () => new AlreadyApprovedError()
)

/**
 * AlreadyRejected: 'Member already rejected the transaction'
 *
 * @category Errors
 * @category generated
 */
export class AlreadyRejectedError extends Error {
  readonly code: number = 0x177b
  readonly name: string = 'AlreadyRejected'
  constructor() {
    super('Member already rejected the transaction')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, AlreadyRejectedError)
    }
  }
}

createErrorFromCodeLookup.set(0x177b, () => new AlreadyRejectedError())
createErrorFromNameLookup.set(
  'AlreadyRejected',
  () => new AlreadyRejectedError()
)

/**
 * AlreadyCancelled: 'Member already cancelled the transaction'
 *
 * @category Errors
 * @category generated
 */
export class AlreadyCancelledError extends Error {
  readonly code: number = 0x177c
  readonly name: string = 'AlreadyCancelled'
  constructor() {
    super('Member already cancelled the transaction')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, AlreadyCancelledError)
    }
  }
}

createErrorFromCodeLookup.set(0x177c, () => new AlreadyCancelledError())
createErrorFromNameLookup.set(
  'AlreadyCancelled',
  () => new AlreadyCancelledError()
)

/**
 * InvalidNumberOfAccounts: 'Wrong number of accounts provided'
 *
 * @category Errors
 * @category generated
 */
export class InvalidNumberOfAccountsError extends Error {
  readonly code: number = 0x177d
  readonly name: string = 'InvalidNumberOfAccounts'
  constructor() {
    super('Wrong number of accounts provided')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InvalidNumberOfAccountsError)
    }
  }
}

createErrorFromCodeLookup.set(0x177d, () => new InvalidNumberOfAccountsError())
createErrorFromNameLookup.set(
  'InvalidNumberOfAccounts',
  () => new InvalidNumberOfAccountsError()
)

/**
 * InvalidAccount: 'Invalid account provided'
 *
 * @category Errors
 * @category generated
 */
export class InvalidAccountError extends Error {
  readonly code: number = 0x177e
  readonly name: string = 'InvalidAccount'
  constructor() {
    super('Invalid account provided')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InvalidAccountError)
    }
  }
}

createErrorFromCodeLookup.set(0x177e, () => new InvalidAccountError())
createErrorFromNameLookup.set('InvalidAccount', () => new InvalidAccountError())

/**
 * RemoveLastMember: 'Cannot remove last member'
 *
 * @category Errors
 * @category generated
 */
export class RemoveLastMemberError extends Error {
  readonly code: number = 0x177f
  readonly name: string = 'RemoveLastMember'
  constructor() {
    super('Cannot remove last member')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, RemoveLastMemberError)
    }
  }
}

createErrorFromCodeLookup.set(0x177f, () => new RemoveLastMemberError())
createErrorFromNameLookup.set(
  'RemoveLastMember',
  () => new RemoveLastMemberError()
)

/**
 * NoVoters: 'Members don't include any voters'
 *
 * @category Errors
 * @category generated
 */
export class NoVotersError extends Error {
  readonly code: number = 0x1780
  readonly name: string = 'NoVoters'
  constructor() {
    super("Members don't include any voters")
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, NoVotersError)
    }
  }
}

createErrorFromCodeLookup.set(0x1780, () => new NoVotersError())
createErrorFromNameLookup.set('NoVoters', () => new NoVotersError())

/**
 * NoProposers: 'Members don't include any proposers'
 *
 * @category Errors
 * @category generated
 */
export class NoProposersError extends Error {
  readonly code: number = 0x1781
  readonly name: string = 'NoProposers'
  constructor() {
    super("Members don't include any proposers")
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, NoProposersError)
    }
  }
}

createErrorFromCodeLookup.set(0x1781, () => new NoProposersError())
createErrorFromNameLookup.set('NoProposers', () => new NoProposersError())

/**
 * NoExecutors: 'Members don't include any executors'
 *
 * @category Errors
 * @category generated
 */
export class NoExecutorsError extends Error {
  readonly code: number = 0x1782
  readonly name: string = 'NoExecutors'
  constructor() {
    super("Members don't include any executors")
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, NoExecutorsError)
    }
  }
}

createErrorFromCodeLookup.set(0x1782, () => new NoExecutorsError())
createErrorFromNameLookup.set('NoExecutors', () => new NoExecutorsError())

/**
 * InvalidStaleTransactionIndex: '`stale_transaction_index` must be <= `transaction_index`'
 *
 * @category Errors
 * @category generated
 */
export class InvalidStaleTransactionIndexError extends Error {
  readonly code: number = 0x1783
  readonly name: string = 'InvalidStaleTransactionIndex'
  constructor() {
    super('`stale_transaction_index` must be <= `transaction_index`')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InvalidStaleTransactionIndexError)
    }
  }
}

createErrorFromCodeLookup.set(
  0x1783,
  () => new InvalidStaleTransactionIndexError()
)
createErrorFromNameLookup.set(
  'InvalidStaleTransactionIndex',
  () => new InvalidStaleTransactionIndexError()
)

/**
 * NotSupportedForControlled: 'Instruction not supported for controlled multisig'
 *
 * @category Errors
 * @category generated
 */
export class NotSupportedForControlledError extends Error {
  readonly code: number = 0x1784
  readonly name: string = 'NotSupportedForControlled'
  constructor() {
    super('Instruction not supported for controlled multisig')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, NotSupportedForControlledError)
    }
  }
}

createErrorFromCodeLookup.set(
  0x1784,
  () => new NotSupportedForControlledError()
)
createErrorFromNameLookup.set(
  'NotSupportedForControlled',
  () => new NotSupportedForControlledError()
)

/**
 * TimeLockNotReleased: 'Proposal time lock has not been released'
 *
 * @category Errors
 * @category generated
 */
export class TimeLockNotReleasedError extends Error {
  readonly code: number = 0x1785
  readonly name: string = 'TimeLockNotReleased'
  constructor() {
    super('Proposal time lock has not been released')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, TimeLockNotReleasedError)
    }
  }
}

createErrorFromCodeLookup.set(0x1785, () => new TimeLockNotReleasedError())
createErrorFromNameLookup.set(
  'TimeLockNotReleased',
  () => new TimeLockNotReleasedError()
)

/**
 * NoActions: 'Config transaction must have at least one action'
 *
 * @category Errors
 * @category generated
 */
export class NoActionsError extends Error {
  readonly code: number = 0x1786
  readonly name: string = 'NoActions'
  constructor() {
    super('Config transaction must have at least one action')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, NoActionsError)
    }
  }
}

createErrorFromCodeLookup.set(0x1786, () => new NoActionsError())
createErrorFromNameLookup.set('NoActions', () => new NoActionsError())

/**
 * MissingAccount: 'Missing account'
 *
 * @category Errors
 * @category generated
 */
export class MissingAccountError extends Error {
  readonly code: number = 0x1787
  readonly name: string = 'MissingAccount'
  constructor() {
    super('Missing account')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, MissingAccountError)
    }
  }
}

createErrorFromCodeLookup.set(0x1787, () => new MissingAccountError())
createErrorFromNameLookup.set('MissingAccount', () => new MissingAccountError())

/**
 * InvalidMint: 'Invalid mint'
 *
 * @category Errors
 * @category generated
 */
export class InvalidMintError extends Error {
  readonly code: number = 0x1788
  readonly name: string = 'InvalidMint'
  constructor() {
    super('Invalid mint')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InvalidMintError)
    }
  }
}

createErrorFromCodeLookup.set(0x1788, () => new InvalidMintError())
createErrorFromNameLookup.set('InvalidMint', () => new InvalidMintError())

/**
 * InvalidDestination: 'Invalid destination'
 *
 * @category Errors
 * @category generated
 */
export class InvalidDestinationError extends Error {
  readonly code: number = 0x1789
  readonly name: string = 'InvalidDestination'
  constructor() {
    super('Invalid destination')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InvalidDestinationError)
    }
  }
}

createErrorFromCodeLookup.set(0x1789, () => new InvalidDestinationError())
createErrorFromNameLookup.set(
  'InvalidDestination',
  () => new InvalidDestinationError()
)

/**
 * SpendingLimitExceeded: 'Spending limit exceeded'
 *
 * @category Errors
 * @category generated
 */
export class SpendingLimitExceededError extends Error {
  readonly code: number = 0x178a
  readonly name: string = 'SpendingLimitExceeded'
  constructor() {
    super('Spending limit exceeded')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, SpendingLimitExceededError)
    }
  }
}

createErrorFromCodeLookup.set(0x178a, () => new SpendingLimitExceededError())
createErrorFromNameLookup.set(
  'SpendingLimitExceeded',
  () => new SpendingLimitExceededError()
)

/**
 * DecimalsMismatch: 'Decimals don't match the mint'
 *
 * @category Errors
 * @category generated
 */
export class DecimalsMismatchError extends Error {
  readonly code: number = 0x178b
  readonly name: string = 'DecimalsMismatch'
  constructor() {
    super("Decimals don't match the mint")
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, DecimalsMismatchError)
    }
  }
}

createErrorFromCodeLookup.set(0x178b, () => new DecimalsMismatchError())
createErrorFromNameLookup.set(
  'DecimalsMismatch',
  () => new DecimalsMismatchError()
)

/**
 * UnknownPermission: 'Member has unknown permission'
 *
 * @category Errors
 * @category generated
 */
export class UnknownPermissionError extends Error {
  readonly code: number = 0x178c
  readonly name: string = 'UnknownPermission'
  constructor() {
    super('Member has unknown permission')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, UnknownPermissionError)
    }
  }
}

createErrorFromCodeLookup.set(0x178c, () => new UnknownPermissionError())
createErrorFromNameLookup.set(
  'UnknownPermission',
  () => new UnknownPermissionError()
)

/**
 * ProtectedAccount: 'Account is protected, it cannot be passed into a CPI as writable'
 *
 * @category Errors
 * @category generated
 */
export class ProtectedAccountError extends Error {
  readonly code: number = 0x178d
  readonly name: string = 'ProtectedAccount'
  constructor() {
    super('Account is protected, it cannot be passed into a CPI as writable')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, ProtectedAccountError)
    }
  }
}

createErrorFromCodeLookup.set(0x178d, () => new ProtectedAccountError())
createErrorFromNameLookup.set(
  'ProtectedAccount',
  () => new ProtectedAccountError()
)

/**
 * Attempts to resolve a custom program error from the provided error code.
 * @category Errors
 * @category generated
 */
export function errorFromCode(code: number): MaybeErrorWithCode {
  const createError = createErrorFromCodeLookup.get(code)
  return createError != null ? createError() : null
}

/**
 * Attempts to resolve a custom program error from the provided error name, i.e. 'Unauthorized'.
 * @category Errors
 * @category generated
 */
export function errorFromName(name: string): MaybeErrorWithCode {
  const createError = createErrorFromNameLookup.get(name)
  return createError != null ? createError() : null
}
