import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-glass-cup",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrGlassCup {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M262-80q-23.25 0-40.5-14.93Q204.25-109.86 202-133l-78-714q-2-13.5 6.5-23.25T153-880h654q14 0 22.5 9.75T836-847l-78 714q-2.25 23.14-19.5 38.07Q721.25-80 698-80H262Zm448-170H250l12 110h436l12-110ZM187-820l56 510h473.53L773-820H187Zm511 680H262h436Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrGlassCup;
