import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-equalizer",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrEqualizer {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 20c1.1 0 2-0.9 2-2V6c0-1.1-0.9-2-2-2s-2 0.9-2 2v12c0 1.10.9 2 2 2zm-6 0c1.1 0 2-0.9 2-2v-4c0-1.1-0.9-2-2-2s-2 0.9-2 2v4c0 1.10.9 2 2 2zm10-9v7c0 1.10.9 2 2 2s2-0.9 2-2v-7c0-1.1-0.9-2-2-2s-2 0.9-2 2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrEqualizer;
