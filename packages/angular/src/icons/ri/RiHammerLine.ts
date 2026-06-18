import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-hammer-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiHammerLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 2C20.55 2 21 2.45 21 3V8C21 8.55 20.55 9 20 9H15V22C15 22.55 14.55 23 14 23H10C9.45 23 9 22.55 9 22V9H3.5C2.95 9 2.5 8.55 2.5 8V5.62C2.5 5.24 2.71 4.89 3.05 4.72L8.5 2H20ZM15 4H8.97L4.5 6.24V7H11V21H13V7H15V4ZM19 4H17V7H19V4Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiHammerLine;
