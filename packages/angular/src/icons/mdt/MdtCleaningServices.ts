import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-cleaning-services",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtCleaningServices {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 3h2v8h-2zm5 10H8c-1.65 0-3 1.35-3 3v5h2v-3c0-0.550.45-1 1-1s1 0.45 1 1v3h2v-3c0-0.550.45-1 1-1s1 0.45 1 1v3h2v-3c0-0.550.45-1 1-1s1 0.45 1 1v3h2v-5c0-1.65-1.35-3-3-3z","opacity":".3"}],["path",{"d":"M16 11h-1V3c0-1.1-0.9-2-2-2h-2c-1.1 0-2 0.9-2 2v8H8c-2.76 0-5 2.24-5 5v7h18v-7c0-2.76-2.24-5-5-5zm-5-8h2v8h-2V3zm8 18h-2v-3c0-0.55-0.45-1-1-1s-1 0.45-1 1v3h-2v-3c0-0.55-0.45-1-1-1s-1 0.45-1 1v3H9v-3c0-0.55-0.45-1-1-1s-1 0.45-1 1v3H5v-5c0-1.65 1.35-3 3-3h8c1.65 0 3 1.35 3 3v5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtCleaningServices;
