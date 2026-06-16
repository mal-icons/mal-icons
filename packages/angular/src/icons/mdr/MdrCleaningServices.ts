import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-cleaning-services",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrCleaningServices {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16 11h-1V4c0-1.66-1.34-3-3-3S9 2.34 9 4v7H8c-2.76 0-5 2.24-5 5v5c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2v-5c0-2.76-2.24-5-5-5zm3 10h-2v-3c0-0.55-0.45-1-1-1s-1 0.45-1 1v3h-2v-3c0-0.55-0.45-1-1-1s-1 0.45-1 1v3H9v-3c0-0.55-0.45-1-1-1s-1 0.45-1 1v3H5v-5c0-1.65 1.35-3 3-3h8c1.65 0 3 1.35 3 3v5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrCleaningServices;
