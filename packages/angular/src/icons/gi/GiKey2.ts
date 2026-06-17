import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-key",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiKey2 {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M226.88 16v243.27a120.02 120.02 0 0 0 30 236.71 120 120 0 0 0 30-236.24v-93.75h60v-45h-60v-45h90V16H226.88zm25.31 299.99a60.01 60.01 0 0 1 2.34 0 60 60 0 0 1 2.34 0 60 60 0 0 1 0 120 60.04 60.04 0 0 1-4.69-120z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiKey2;
