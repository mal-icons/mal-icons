import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-sms",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssSms {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M306-523q17 0 28.5-11.5T346-563q0-17-11.5-28.5T306-603q-17 0-28.5 11.5T266-563q0 17 11.5 28.5T306-523Zm177 0q17 0 28.5-11.5T523-563q0-17-11.5-28.5T483-603q-17 0-28.5 11.5T443-563q0 17 11.5 28.5T483-523Zm170 0q17 0 28.5-11.5T693-563q0-17-11.5-28.5T653-603q-17 0-28.5 11.5T613-563q0 17 11.5 28.5T653-523ZM80-80v-800h800v640H240L80-80Zm60-220h680v-520H140v520Zm0 0v-520 520Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssSms;
