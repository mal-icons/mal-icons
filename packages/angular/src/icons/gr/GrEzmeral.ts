import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-ezmeral",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrEzmeral {
  readonly viewBox = "0 0 48 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 8H41V16H7V8Z","fill":"currentColor"}],["path",{"d":"M1 8H7V16H1V8Z","fill":"currentColor"}],["path",{"d":"M41 8H47V16H41V8Z","fill":"currentColor"}],["path",{"d":"M7 16H41V22H7V16Z","fill":"currentColor"}],["path",{"d":"M7 2H41V8H7V2Z","fill":"currentColor"}],["path",{"d":"M1 8L7 2V8H1Z","fill":"currentColor"}],["path",{"d":"M1 16L7 22V16H1Z","fill":"currentColor"}],["path",{"d":"M47 8L41 2V8H47Z","fill":"currentColor"}],["path",{"d":"M47 16L41 22V16H47Z","fill":"currentColor"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrEzmeral;
