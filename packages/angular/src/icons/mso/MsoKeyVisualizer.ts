import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-key-visualizer",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoKeyVisualizer {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M120-120v-60h120v60H120Zm0-170v-60h320v60H120Zm0-160v-60h720v60H120Zm0-160v-60h320v60H120Zm0-170v-60h120v60H120Zm200 660v-60h120v60H320Zm0-660v-60h120v60H320Zm205 660v-60h115v60H525Zm0-170v-60h315v60H525Zm-5-320v-60h320v60H520Zm0-170v-60h120v60H520Zm200 660v-60h120v60H720Zm0-660v-60h120v60H720Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoKeyVisualizer;
