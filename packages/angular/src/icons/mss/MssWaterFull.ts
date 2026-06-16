import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-water-full",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssWaterFull {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M444-610q-60 0-119 19.5T218-536l44 396h435l48-430h-48q-37 0-68-5.5T544-596q-25-7-49.5-10.5T444-610Zm-233 7q51-32 111.5-49T444-670q30 0 59.5 4t56.5 12q51 14 78 19t58 5h56l21-190H187l24 217Zm-3 523-88-800h720L752-80H208Zm236-60h253-435 182Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssWaterFull;
