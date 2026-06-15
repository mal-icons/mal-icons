import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-hi-list-bullet",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class HiListBullet {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h0.01v0.01H3.75V6.75Zm0.38 0a0.380.38 0 1 1-0.75 0 0.380.38 0 0 1 0.75 0ZM3.75 12h0.01v0.01H3.75V12Zm0.38 0a0.380.38 0 1 1-0.75 0 0.380.38 0 0 1 0.75 0Zm-0.37 5.25h0.01v0.01H3.75v-0.01Zm0.38 0a0.380.38 0 1 1-0.75 0 0.380.38 0 0 1 0.75 0Z"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":1.5};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default HiListBullet;
