import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-cloud-off-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiCloudOffLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.51 2.1L22.61 21.19L21.19 22.61L19.18 20.59C18.5 20.86 17.77 21 17 21H7C3.69 21 1 18.31 1 15C1 12.38 2.67 10.16 5.01 9.34C5 9.23 5 9.11 5 9C5 8.22 5.13 7.47 5.36 6.78L2.1 3.51L3.51 2.1ZM7 9C7 9.08 7 9.16 7.01 9.24L7.08 10.73L5.67 11.23C4.08 11.78 3 13.29 3 15C3 17.21 4.79 19 7 19H17C17.19 19 17.37 18.99 17.55 18.96L7.03 8.45C7.01 8.63 7 8.81 7 9ZM12 2C15.87 2 19 5.13 19 9C19 9.11 19 9.23 18.99 9.34C21.33 10.16 23 12.38 23 15C23 16.09 22.71 17.11 22.2 17.99L20.71 16.5C20.9 16.03 21 15.53 21 15C21 12.79 19.21 11 17 11C16.47 11 15.97 11.1 15.5 11.29L14.01 9.8C14.89 9.29 15.91 9 17 9C17 6.24 14.76 4 12 4C10.93 4 9.94 4.34 9.12 4.91L7.69 3.48C8.88 2.55 10.38 2 12 2Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiCloudOffLine;
