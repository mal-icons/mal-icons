import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-box-arrow-down",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBoxArrowDown {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M3.5 10a0.50.5 0 0 1-0.5-0.5v-8a0.50.5 0 0 1 0.5-0.5h9a0.50.5 0 0 1 0.50.5v8a0.50.5 0 0 1-0.50.5h-2a0.50.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a0.50.5 0 0 0 0-1z"}],["path",{"fill-rule":"evenodd","d":"M7.65 15.85a0.50.5 0 0 0 0.71 0l3-3a0.50.5 0 0 0-0.71-0.71L8.5 14.29V5.5a0.50.5 0 0 0-1 0v8.79l-2.15-2.15a0.50.5 0 0 0-0.710.71z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBoxArrowDown;
