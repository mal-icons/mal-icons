import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-pinch-zoom-in",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssPinchZoomIn {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m54-476-28-28 130-131H55v-40h170v170h-40v-101L54-476Zm230-258v-170h40v101l131-131 29 29-131 131h101v40H284ZM544-40 304-280l39-57 137 37v-370h60v450l-124-33 153 153h291v-310h60v370H544Zm63-290v-200h60v200h-60Zm126 0v-160h60v160h-60Zm-36 105Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssPinchZoomIn;
