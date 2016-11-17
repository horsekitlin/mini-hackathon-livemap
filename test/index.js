/**
 * @flow
 */
import * as UserSpecs from './specs/routers/users.spec';
import MongoDBManager from '../appsocket/utils/mongoManager';

describe('User Unitest', function () {
    before(done => {
        MongoDBManager.clear('users');
        done();
    });

    it('should 建立一個使用者', UserSpecs.createUserSuccess);
    it('should 缺少Facebook ID 建立使用者失敗');
    it('should 會員登入取得驗證Token');
    it('should 取回會員列表');
    it('should 取回會員詳情');
});

describe('Room Unitest', function () {

    it('should 建立一個新的房間');
    it('should 會員加入一個房間');
    it('should 會員離開房間');
    it('should 取回房間列表');
    it('should 取回房間詳情資訊');
    it('should 發送房間訊息');
});