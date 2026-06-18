import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-fire-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiFireFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 23C7.86 23 4.5 19.64 4.5 15.5C4.5 13.35 5.41 11.4 6.86 10.04C8.2 8.77 11.5 6.5 11 1.5C17 5.5 20 9.5 14 15.5C15 15.5 16.5 15.5 19 13.03C19.27 13.8 19.5 14.63 19.5 15.5C19.5 19.64 16.14 23 12 23Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiFireFill;
