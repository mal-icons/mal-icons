import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-abstract-102",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiAbstract102 {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"m21,21c4.41,21.12 8.31,44.42 11.46,69.18h76.23v48.32h-55.37c7.63,26.12 12.6,63.71 13.37,106.19h41.27v31.28h-41.57c-0.16,4.89-0.17,9.66-0.44,14.39h42.01v31.28h-44.8c-2.34,20.03-5.68,37.75-9.84,51.99h55.37v48.32h-76.23c-3.14,24.76-7.05,47.91-11.46,69.03 46.27-8.75 101.08-14.93 160.97-17.77v-51.26-48.32h35.1c7.81,70.09 22.22,117.35 38.92,117.35s31.25-47.26 39.07-117.35h35.1v48.32 51.26c59.89,2.85 114.56,9.02 160.83,17.77-4.41-21.12-8.17-44.27-11.31-69.03h-76.23v-48.32h55.37c-4.16-14.24-7.57-31.96-9.99-51.99h-44.8v-31.28h42.01c-0.28-4.73-0.42-9.5-0.59-14.39h-41.42v-31.28h41.12c0.8-42.48 6.03-80.07 13.66-106.19h-55.37v-48.32h76.23c3.14-24.76 6.9-48.06 11.31-69.18-46.27,8.75-100.94,15.07-160.83,17.92v99.58h-35.1c-7.82-70.12-22.36-117.5-39.07-117.5s-31.12,47.38-38.92,117.5h-35.1v-99.58c-59.89-2.85-114.71-9.16-160.97-17.92zm120.29,171.26h229.57v127.63h-229.57v-127.63zm29.38,48.47v65.21h170.67v-65.21h-85.33-85.33z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiAbstract102;
