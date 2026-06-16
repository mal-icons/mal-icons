import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-water-full",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrWaterFull {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M444-610q-60 0-119 19.5T218-536l44 396h436l47-430h-48q-37.25 0-68.12-5.5Q598-581 544-596q-25-7-49.5-10.5T444-610ZM187-820l24 217q51-32 111.5-49T444-670q30 0 59.5 4t56.5 12q51.13 14 78.23 19 27.1 5 57.77 5h56l21-190H187Zm257 680h253-435 182ZM262-80q-23.25 0-40.5-14.93Q204.25-109.86 202-133l-78-714q-2-13.5 6.5-23.25T153-880h654q14 0 22.5 9.75T836-847l-78 714q-2.25 23.14-19.5 38.07Q721.25-80 698-80H262Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrWaterFull;
