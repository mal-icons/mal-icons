import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-list-task",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsListTask {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M2 2.5a0.50.5 0 0 0-0.50.5v1a0.50.5 0 0 0 0.50.5h1a0.50.5 0 0 0 0.5-0.5V3a0.50.5 0 0 0-0.5-0.5zM3 3H2v1h1z"}],["path",{"d":"M5 3.5a0.50.5 0 0 1 0.5-0.5h9a0.50.5 0 0 1 0 1h-9a0.50.5 0 0 1-0.5-0.5M5.5 7a0.50.5 0 0 0 0 1h9a0.50.5 0 0 0 0-1zm0 4a0.50.5 0 0 0 0 1h9a0.50.5 0 0 0 0-1z"}],["path",{"fill-rule":"evenodd","d":"M1.5 7a0.50.5 0 0 1 0.5-0.5h1a0.50.5 0 0 1 0.50.5v1a0.50.5 0 0 1-0.50.5H2a0.50.5 0 0 1-0.5-0.5zM2 7h1v1H2zm0 3.5a0.50.5 0 0 0-0.50.5v1a0.50.5 0 0 0 0.50.5h1a0.50.5 0 0 0 0.5-0.5v-1a0.50.5 0 0 0-0.5-0.5zm1 0.5H2v1h1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsListTask;
