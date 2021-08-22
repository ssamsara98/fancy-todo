import catchAsync from '../utils/catch-async.helper';

class UserController {
  static me = catchAsync(async (req, res) => {
    res.json((req as any).user);
    return;
  });
}

export default UserController;
