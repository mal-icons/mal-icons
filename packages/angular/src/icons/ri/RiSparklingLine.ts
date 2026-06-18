import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-sparkling-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiSparklingLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 4.44C15.35 4.44 16.44 3.35 16.44 2H17.56C17.56 3.35 18.65 4.44 20 4.44V5.56C18.65 5.56 17.56 6.65 17.56 8H16.44C16.44 6.65 15.35 5.56 14 5.56V4.44ZM1 11C4.31 11 7 8.31 7 5H9C9 8.31 11.69 11 15 11V13C11.69 13 9 15.69 9 19H7C7 15.69 4.31 13 1 13V11ZM4.88 12C6.19 12.73 7.27 13.81 8 15.12 8.73 13.81 9.81 12.73 11.12 12 9.81 11.27 8.73 10.19 8 8.88 7.27 10.19 6.19 11.27 4.88 12ZM17.25 14C17.25 15.79 15.79 17.25 14 17.25V18.75C15.79 18.75 17.25 20.21 17.25 22H18.75C18.75 20.21 20.21 18.75 22 18.75V17.25C20.21 17.25 18.75 15.79 18.75 14H17.25Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiSparklingLine;
