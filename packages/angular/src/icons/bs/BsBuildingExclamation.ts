import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-building-exclamation",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBuildingExclamation {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6.5a0.50.5 0 0 1-1 0V1H3v14h3v-2.5a0.50.5 0 0 1 0.5-0.5H8v4H3a1 1 0 0 1-1-1z"}],["path",{"d":"M4.5 2a0.50.5 0 0 0-0.50.5v1a0.50.5 0 0 0 0.50.5h1a0.50.5 0 0 0 0.5-0.5v-1a0.50.5 0 0 0-0.5-0.5zm3 0a0.50.5 0 0 0-0.50.5v1a0.50.5 0 0 0 0.50.5h1a0.50.5 0 0 0 0.5-0.5v-1a0.50.5 0 0 0-0.5-0.5zm3 0a0.50.5 0 0 0-0.50.5v1a0.50.5 0 0 0 0.50.5h1a0.50.5 0 0 0 0.5-0.5v-1a0.50.5 0 0 0-0.5-0.5zm-6 3a0.50.5 0 0 0-0.50.5v1a0.50.5 0 0 0 0.50.5h1a0.50.5 0 0 0 0.5-0.5v-1a0.50.5 0 0 0-0.5-0.5zm3 0a0.50.5 0 0 0-0.50.5v1a0.50.5 0 0 0 0.50.5h1a0.50.5 0 0 0 0.5-0.5v-1a0.50.5 0 0 0-0.5-0.5zm3 0a0.50.5 0 0 0-0.50.5v1a0.50.5 0 0 0 0.50.5h1a0.50.5 0 0 0 0.5-0.5v-1a0.50.5 0 0 0-0.5-0.5zm-6 3a0.50.5 0 0 0-0.50.5v1a0.50.5 0 0 0 0.50.5h1a0.50.5 0 0 0 0.5-0.5v-1a0.50.5 0 0 0-0.5-0.5zm3 0a0.50.5 0 0 0-0.50.5v1a0.50.5 0 0 0 0.50.5h1a0.50.5 0 0 0 0.5-0.5v-1a0.50.5 0 0 0-0.5-0.5zm8.5 4.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-3.5-2a0.50.5 0 0 0-0.50.5v1.5a0.50.5 0 0 0 1 0V11a0.50.5 0 0 0-0.5-0.5m0 4a0.50.5 0 1 0 0-1 0.50.5 0 0 0 0 1"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBuildingExclamation;
