import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-passport",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevPassport {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M300 0A240 240 0 0 0 60 240h120a120 120 0 0 1 120-120z"}],["path",{"fill":"currentColor","d":"M540 240A240 240 0 0 0 300 0v120a120 120 0 0 1 120 120z"}],["path",{"fill":"currentColor","d":"M300 480a240 240 0 0 0 240-240H420a120 120 0 0 1-120 120z"}],["path",{"fill":"currentColor","d":"M180 480V240H60v360h240V480z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevPassport;
