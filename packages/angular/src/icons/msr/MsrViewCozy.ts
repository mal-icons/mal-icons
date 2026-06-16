import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-view-cozy",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrViewCozy {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M360-540H180q-24.75 0-42.37-17.62T120-600v-180q0-24.75 17.63-42.37T180-840h180q24.75 0 42.38 17.63T420-780v180q0 24.75-17.62 42.38T360-540Zm-180-60h180v-180H180v180Zm180 480H180q-24.75 0-42.37-17.62T120-180v-180q0-24.75 17.63-42.37T180-420h180q24.75 0 42.38 17.63T420-360v180q0 24.75-17.62 42.38T360-120Zm-180-60h180v-180H180v180Zm600-360H600q-24.75 0-42.37-17.62T540-600v-180q0-24.75 17.63-42.37T600-840h180q24.75 0 42.38 17.63T840-780v180q0 24.75-17.62 42.38T780-540Zm-180-60h180v-180H600v180Zm180 480H600q-24.75 0-42.37-17.62T540-180v-180q0-24.75 17.63-42.37T600-420h180q24.75 0 42.38 17.63T840-360v180q0 24.75-17.62 42.38T780-120Zm-180-60h180v-180H600v180ZM360-600Zm0 240Zm240-240Zm0 240Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrViewCozy;
