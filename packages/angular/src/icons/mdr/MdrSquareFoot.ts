import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-square-foot",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrSquareFoot {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m17.66 17.66-0.710.71c-0.20.2-0.510.2-0.71 0-0.2-0.2-0.2-0.51 0-0.71l0.71-0.71-1.94-1.94-0.710.71c-0.20.2-0.510.2-0.71 0-0.2-0.2-0.2-0.51 0-0.71l0.71-0.71-1.94-1.94-0.710.71c-0.20.2-0.510.2-0.71 0-0.2-0.2-0.2-0.51 0-0.71l0.71-0.71L9.7 9.7l-0.710.71c-0.20.2-0.510.2-0.71 0-0.2-0.2-0.2-0.51 0-0.71l0.71-0.71-1.94-1.94-0.710.71c-0.20.2-0.510.2-0.71 0-0.2-0.2-0.2-0.51 0-0.71l0.71-0.71-1.49-1.49a0.50.5 0 0 0-0.850.36V18c0 1.10.9 2 2 2h12.79c0.45 0 0.67-0.540.35-0.85l-1.48-1.49zM7 16v-4.76L12.76 17H8c-0.55 0-1-0.45-1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrSquareFoot;
