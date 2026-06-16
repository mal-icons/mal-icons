import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-find-replace",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssFindReplace {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M164-572q17-100 95.5-164T440-800q65 0 121.5 30t98.5 81v-111h60v228H492v-60h134q-32-48-80.5-78T440-740q-77 0-137.5 46.5T225-572h-61Zm633 452L613-304q-37 31-81 47t-92 16q-65 0-122.5-27T220-346v106h-60v-228h228v60H249q33 48 83 77.5T440-301q75 0 133.5-47T651-468h61q-5 34-19.5 64.5T656-347l184 184-43 43Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssFindReplace;
