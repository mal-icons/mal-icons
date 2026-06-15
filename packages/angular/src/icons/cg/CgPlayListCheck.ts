import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-play-list-check",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgPlayListCheck {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 6H3V8H15V6Z","fill":"currentColor"}],["path",{"d":"M15 10H3V12H15V10Z","fill":"currentColor"}],["path",{"d":"M3 14H11V16H3V14Z","fill":"currentColor"}],["path",{"d":"M11.99 15.03L13.4 13.61L15.53 15.73L19.77 11.49L21.18 12.9L15.53 18.56L11.99 15.03Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgPlayListCheck;
