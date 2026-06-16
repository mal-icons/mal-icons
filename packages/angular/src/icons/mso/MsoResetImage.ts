import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-reset-image",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoResetImage {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M120-580v-230h60v131q48-73 127-117t173-44q128 0 224 75.5T829-580h-62q-29-84-107-142t-180-58q-81 0-147.5 38.5T226-640h124v60H120Zm116 343h489L578-433 446-262l-93-127-117 152ZM180-80q-25 0-42.5-17.5T120-140v-360h60v360h600v-360h60v360q0 25-17.5 42.5T780-80H180Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoResetImage;
