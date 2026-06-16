import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-phone-missed",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssPhoneMissed {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M158-121 22-257q84-109 205.5-164.5T480-477q131 0 252.5 55.5T938-257L802-121 651-234v-154q-42-16-85.5-22.5T480-417q-42 0-85.5 6.5T309-388v154L158-121Zm3-81 83-61v-100q-39 19-73.5 45.5T104-261l57 59Zm637-1 58-58q-32-33-68.5-58.5T711-367v98l87 66ZM479-521 268-735v122h-60v-225h225v60H307l173 171 231-232 43 43-275 275Zm232 154Zm-467 4Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssPhoneMissed;
