import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-camera-off-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiCameraOffLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.59 21H3C2.45 21 2 20.55 2 20V6C2 5.45 2.45 5 3 5H3.59L1.39 2.81L2.81 1.39L22.61 21.19L21.19 22.61L19.59 21ZM5.59 7H4V19H17.59L15.41 16.82C14.47 17.56 13.29 18 12 18C8.96 18 6.5 15.54 6.5 12.5C6.5 11.21 6.94 10.03 7.68 9.09L5.59 7ZM9.11 10.52C8.73 11.09 8.5 11.77 8.5 12.5C8.5 14.43 10.07 16 12 16C12.73 16 13.41 15.77 13.98 15.39L9.11 10.52ZM22 17.79L20 15.79V7H16.17L14.17 5H9.83L9.52 5.31L8.11 3.89L9 3H15L17 5H21C21.55 5 22 5.45 22 6V17.79ZM11.26 7.05C11.5 7.02 11.75 7 12 7C15.04 7 17.5 9.46 17.5 12.5C17.5 12.75 17.48 13 17.45 13.24L15.11 10.9C14.78 10.25 14.25 9.72 13.6 9.39L11.26 7.05Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiCameraOffLine;
