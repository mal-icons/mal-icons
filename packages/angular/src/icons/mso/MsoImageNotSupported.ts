import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-image-not-supported",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoImageNotSupported {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m843-28-92-92H180q-24.75 0-42.37-17.62T120-180v-571l-82-82 43-43L886-71l-43 43ZM180-180h511L571-300H240l120-140 80 109 46-55-306-306v512Zm660-22-60-60v-518H262l-60-60h578q24.75 0 42.38 17.63T840-780v578ZM524-518Zm-88 83Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoImageNotSupported;
