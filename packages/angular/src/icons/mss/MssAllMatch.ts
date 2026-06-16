import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-all-match",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssAllMatch {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m230-260 142-220-142-220 142 220-22 34.5Q328-411 301-370t-49 75.5L230-260Zm-110 60 180-280-180-280h521l199 280-15 21q-14-6-27-9.5t-24-5.5L610-700H230l142 220-142 220h257q-2 15-2 30t2 30H120Zm584 61 139-138-42-42-97 95-39-39-42 43 81 81Zm28.5 98Q655-41 600-96.5T545-228q0-78.43 54.99-133.72Q654.98-417 733-417q77 0 132.5 55.28Q921-306.43 921-228q0 76-55.5 131.5T732.5-41Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssAllMatch;
