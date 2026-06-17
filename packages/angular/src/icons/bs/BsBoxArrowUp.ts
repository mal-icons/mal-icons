import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-box-arrow-up",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBoxArrowUp {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M3.5 6a0.50.5 0 0 0-0.50.5v8a0.50.5 0 0 0 0.50.5h9a0.50.5 0 0 0 0.5-0.5v-8a0.50.5 0 0 0-0.5-0.5h-2a0.50.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a0.50.5 0 0 1 0 1z"}],["path",{"fill-rule":"evenodd","d":"M7.650.15a0.50.5 0 0 1 0.71 0l3 3a0.50.5 0 0 1-0.710.71L8.5 1.71V10.5a0.50.5 0 0 1-1 0V1.71L5.35 3.85a0.50.5 0 1 1-0.71-0.71z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBoxArrowUp;
