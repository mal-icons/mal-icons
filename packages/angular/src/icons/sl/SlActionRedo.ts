import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-sl-action-redo",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SlActionRedo {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M33.94 942.34c0.34 0 0.72 0 1.09-0.03 16.19-0.53 26.4-13.09 27.78-29.22C63.89 901.22 95.78 614 544.05 614.3l1.01 183.66c0 12.37 7.12 23.66 18.34 28.94 11.09 5.31 24.43 3.68 33.97-4.22l414.98-343.78a31.86 31.86 0 0 0 11.68-24.78c-0.03-9.6-4.34-18.69-11.78-24.75L597.28 88.82c-9.57-7.81-22.78-9.31-33.94-4.09-11.15 5.31-18.29 16.56-18.29 28.91l-1.01 179.63c-185.95 5.89-329.97 65.71-423.33 174.96C-31.22 646 2.69 904.39 4.29 915.14c2.37 15.68 13.87 27.2 29.65 27.2zm543.12-392.53h-0.06c-320.210.19-442.59 108.32-512.46 203.82 10.22-76.5 40.06-168.72 105.01-244.03 86.34-100.1 225.44-152.85 407.54-152.85 17.68 0 32-14.32 32-32V180.98l332.43 273.34-332.45 275.9v-148.4a31.95 31.95 0 0 0-9.41-22.66 31.96 31.96 0 0 0-22.59-9.36z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SlActionRedo;
