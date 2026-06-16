import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-archive",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtArchive {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 19h14V8H5v11zm5.55-6v-3h2.91v3H16l-4 4-4-4h2.55z","opacity":".3"}],["path",{"d":"M16 13h-2.55v-3h-2.9v3H8l4 4zm4.54-7.77-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-0.47 0-0.880.21-1.160.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2V6.5c0-0.48-0.17-0.93-0.46-1.27zM6.24 5h11.52l0.810.97H5.44l0.8-0.97zM19 19H5V8h14v11z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtArchive;
