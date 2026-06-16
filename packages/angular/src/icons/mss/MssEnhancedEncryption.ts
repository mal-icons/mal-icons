import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-enhanced-encryption",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssEnhancedEncryption {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M450-332v135h60v-135h135v-60H510v-135h-60v135H315v60h135ZM160-80v-554h130v-96q0-78.85 55.61-134.43Q401.21-920 480.11-920T614.5-864.42Q670-808.85 670-730v96h130v554H160Zm60-60h520v-434H220v434Zm130-494h260v-96q0-54.17-37.88-92.08-37.88-37.92-92-37.92Q426-860 388-822.08 350-784.17 350-730v96ZM220-140v-434 434Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssEnhancedEncryption;
