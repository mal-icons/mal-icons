import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-format-list-bulleted-add",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrFormatListBulletedAdd {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M735.14-134q6.86 0 11.36-5.1 4.5-5.1 4.5-11.9v-93h94q7 0 11.5-5.14t4.5-12q0-6.86-4.5-11.36Q852-277 845-277h-94v-94q0-7-4.5-11.5t-11.36-4.5q-6.86 0-12 4.5T718-371v94h-94q-7 0-11.5 4.5t-4.5 11.36q0 6.86 5.1 12T625-244h93v94q0 7 5.14 11.5t12 4.5ZM732.5-74Q655-74 600-129.5T545-261q0-78.43 54.99-133.72Q654.98-450 733-450q77 0 132.5 55.28Q921-339.43 921-261q0 76-55.5 131.5T732.5-74ZM407-703q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T407-763h403q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T810-703H407ZM189-161q-28.05 0-48.02-19Q121-199 121-227.5t19.5-48q19.5-19.5 48-19.5t47.5 19.98Q255-255.05 255-227q0 27.23-19.39 46.61Q216.23-161 189-161Zm0-252q-28.05 0-48.02-19.68Q121-452.36 121-480t19.98-47.32Q160.95-547 189-547q27.23 0 46.61 19.68Q255-507.64 255-480t-19.39 47.32Q216.23-413 189-413Zm-1-253q-27.64 0-47.32-19.68Q121-705.36 121-733t19.68-47.32Q160.36-800 188-800q27.64 0 47.32 19.68Q255-760.64 255-733t-19.68 47.32Q215.64-666 188-666Zm219 468q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T407-258h78q0 16 2 31t6 29h-86Zm0-252q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T407-510h326q-46.47 0-87.24 16Q605-478 573-450H407Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrFormatListBulletedAdd;
