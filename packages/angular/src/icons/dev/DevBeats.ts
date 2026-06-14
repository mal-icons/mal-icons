import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-beats",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevBeats {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M447 254.1A187 187 0 0 1 271.9 375H65.6V0H272a187.5 187.5 0 0 1 175 254.1"}],["path",{"fill":"currentColor","d":"M447 254.1A186 186 0 0 0 346.9 225H65.6v150H272c80 0 148.2-50.3 175-120.9"}],["path",{"fill":"currentColor","d":"M491 292.6a243 243 0 0 1-219.1 138H65.6V600H347a187.5 187.5 0 0 0 144-307.4"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevBeats;
