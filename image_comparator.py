import json
import matplotlib.pyplot as plt
import numpy as np
from numpy.core.fromnumeric import size
import pylab
import mahotas as mh
import os

# plt.plot([1,4,5,8],[5,8,9,6])
# plt.show()
# img = mh.imread("C:/Users/louis/OneDrive/Images/id.jpg")
# img = mh.imread("C:/Users/louis/OneDrive/Documents/PhoneBackup2020/DCIM/Soirée/vlad2.jpg")
# img2 = mh.imread("C:/Users/louis/OneDrive/Documents/PhoneBackup2020/DCIM/Soirée/vlad1.jpg")
directory = r"C:/Users/louis/OneDrive/Documents/PhoneBackup2020/DCIM/Camera/Aviron"

p1 = "C:/Users/louis/OneDrive/Documents/PhoneBackup2020/DCIM/Camera/Aviron/eg1.jpeg"
p2 = "C:/Users/louis/OneDrive/Documents/PhoneBackup2020/DCIM/Camera/Aviron/eg2.jpg"

def compare_imgs(path1, path2):
    
    img =mh.imread(path1)
    img2 =mh.imread(path2)

    distance = 0

    if len(img)!=len(img2) or len(img[0])!=len(img2[0]) or len(img[0][0])!=len(img2[0][0]):
        # print("sizes do not match ")
        return False

    inc = 0
    # exhaustive
    # for p1 in range(len(img)):
    #     for p2 in range(len(img[0])):
    #         for p3 in range(len(img[0][0])):
    #             distance = distance+ np.abs(img[p1][p2][p3]-img2[p1][p2][p3])
    #             inc = inc+1
    #             if inc%20000 ==0:
    #                 print(str(inc/size(img))+"%,  distance = "+str(distance))

    # random
    max_comparaison = pow(10,2)
    for i in range(max_comparaison):
        x = np.random.randint(len(img))
        y = np.random.randint(len(img[0]))
        z = np.random.randint(len(img[0][0]))
        distance = distance+ np.abs(img[x][y][z]-img2[x][y][z])
    
    # print("distance = "+ str(distance))
    if distance==0:
        return True
    else:
        return False


print(compare_imgs(p1, p2))

nb = len(os.listdir(directory))
inc = 0
for filename in os.listdir(directory):
    inc = inc+1
    if filename.endswith(".jpg") or filename.endswith(".jpeg") or filename.endswith(".png"):
        print(str(inc/nb)+"%, checking "+filename)
        img1 = os.path.join(directory, filename)
        for filename2 in os.listdir(directory):
            if filename2.endswith(".jpg") or filename2.endswith(".jpeg") or filename2.endswith(".png"):
                img2 = os.path.join(directory, filename2)
                if img2==img1:
                    print("indentical")
                    continue
                else:
                    if compare_imgs(img1,img2):
                        print("img1 = " +img1+" is equivalent to ")
                        print("img2 = "+img2)
            else:
                print(filename+" is not a photo")
                continue
    else:
        print(filename+" is not a photo")
        print()
        continue


    # print("distance = "+str(distance))

    # one = plt.figure(1)
    # pylab.imshow(img)

    # one.show()
    # two = plt.figure(2)

    # pylab.imshow(img2)
    # two.show()
    # input()


