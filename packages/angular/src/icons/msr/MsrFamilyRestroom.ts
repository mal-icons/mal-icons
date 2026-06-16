import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-family-restroom",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrFamilyRestroom {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M720.08-727q-30.08 0-51.58-21.42-21.5-21.42-21.5-51.5 0-30.08 21.42-51.58 21.42-21.5 51.5-21.5 30.08 0 51.58 21.42 21.5 21.42 21.5 51.5 0 30.08-21.42 51.58-21.42 21.5-51.5 21.5ZM660-80v-336q0-30-15-54t-44-35l41-120q8-25 29.5-40t48.5-15q27 0 48.5 15t29.5 40l88 255q5 14-3.5 27T858-330h-68v220q0 12.75-8.62 21.38T760-80H660ZM495-500q-25 0-42.5-17.5T435-560q0-25 17.5-42.5T495-620q25 0 42.5 17.5T555-560q0 25-17.5 42.5T495-500ZM220.08-727q-30.08 0-51.58-21.42-21.5-21.42-21.5-51.5 0-30.08 21.42-51.58 21.42-21.5 51.5-21.5 30.08 0 51.58 21.42 21.5 21.42 21.5 51.5 0 30.08-21.42 51.58-21.42 21.5-51.5 21.5ZM180-80q-12.75 0-21.37-8.62T150-110v-260h-40q-12.75 0-21.37-8.62T80-400v-220q0-24.75 17.63-42.37T140-680h160q24.75 0 42.38 17.63T360-620v220q0 12.75-8.62 21.38T330-370h-40v260q0 12.75-8.62 21.38T260-80h-80Zm290 0q-12.75 0-21.37-8.62T440-110v-140h-20q-12.75 0-21.37-8.62T390-280v-136q0-18.33 12.83-31.17Q415.67-460 434-460h122q18.33 0 31.17 12.83Q600-434.33 600-416v136q0 12.75-8.62 21.38T570-250h-20v140q0 12.75-8.62 21.38T520-80h-50Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrFamilyRestroom;
