If you make snapshots from the volumes of your ec2 machine then you may find yourself needing to mount one of those volumes one day to recover
some data.  We can never be sure when bad judgement will strike and something important will be deleted forever!  If regular snapshots are being created 
this data we can recovery these files in a few simple steps.

Back in 2019 I migrated from OwnCloud to NextCloud.  Fast forward to 2021 and I'm still using a NextCloud and for whatever reason the old OwnCloud install was never
cleaned up.  As luck would have it while cleaning up what I thought were old files I discovered that the data/ directory 
for NextCloud is unfortunately using the data/ directory inside the OwnCloud directory!  Fortunately 
just a day ago I took a snapshop of the drive so recovery is easy.  First convert the snapshot into a volume.

sudo mount -o nouuid -t xfs /dev/xdf1 /mnt/backup

* <a href="https://forums.aws.amazon.com/thread.jspa?messageID=114594">Mounting EBS volume (mount: wrong fs type, bad option, bad superblock)</a></li>
* <a href="https://bbs.archlinux.org/viewtopic.php?id=218883">[Solved] Nextcloud, change Data folder location</a></li>
* <a href="https://docs.nextcloud.com/server/21/admin_manual//maintenance/migrating_owncloud.html">Migrating from ownCloud</a></li>
