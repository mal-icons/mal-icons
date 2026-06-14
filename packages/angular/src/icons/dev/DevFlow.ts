import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-flow",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevFlow {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"m546.1 259.2-200-200h200z","opacity":".7"}],["path",{"fill":"currentColor","d":"M206 0h113.4l86.7 86.6H206z","opacity":".7"}],["path",{"fill":"currentColor","d":"M212.6 200 12.6 0H253v200zm175.7 200 200 200h-200z","opacity":".9"}],["path",{"fill":"currentColor","d":"M253 400 53 200h200zm215.4-101.2L309 139.3h159.5zm18.7 282.6L305.7 400H487z","opacity":".7"}],["path",{"fill":"currentColor","d":"M253 159.3 93.7 0H253z","opacity":".9"}],["path",{"fill":"currentColor","d":"m306.5 400 200 200h-200z","opacity":".8"}],["path",{"fill":"currentColor","d":"M508.9 479.8 309.2 280.1h199.7z","opacity":".7"}],["path",{"fill":"currentColor","d":"m309 139.3 197.6 197.5H309z","opacity":".9"}],["path",{"fill":"currentColor","d":"M253 599.2 11.7 358H253z","opacity":".7"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevFlow;
