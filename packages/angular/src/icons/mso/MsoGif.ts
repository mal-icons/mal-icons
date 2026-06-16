import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-gif",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoGif {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M468-360v-240h48v240h-48Zm-234 0q-15.3 0-24.65-9.5Q200-379 200-394v-172q0-15 9.35-24.5T234-600h124q15.3 0 24.65 9.5Q392-581 392-566v14H248v144h96v-72h48v86q0 15-9.35 24.5T358-360H234Zm354 0v-240h172v48H636v60h81v48h-81v84h-48Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoGif;
