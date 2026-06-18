import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-information-2-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiInformation2Line {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 22C6.48 22 2 17.52 2 12 2 6.48 6.48 2 12 2 17.52 2 22 6.48 22 12 22 17.52 17.52 22 12 22ZM12 20C16.42 20 20 16.42 20 12 20 7.58 16.42 4 12 4 7.58 4 4 7.58 4 12 4 16.42 7.58 20 12 20ZM13 10.5V15H14V17H10V15H11V12.5H10V10.5H13ZM13.5 8C13.5 8.83 12.83 9.5 12 9.5 11.17 9.5 10.5 8.83 10.5 8 10.5 7.17 11.17 6.5 12 6.5 12.83 6.5 13.5 7.17 13.5 8Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiInformation2Line;
