import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-microwave",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoMicrowave {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm0-60h440v-520H140v520Zm500 0h180v-520H640v520Zm60-400h60v-60h-60v60Zm30 170q13 0 21.5-9t8.5-21q0-13-8.5-21.5T730-510q-12 0-21 8.5t-9 21.5q0 12 9 21t21 9Zm0 170q13 0 21.5-9t8.5-21q0-13-8.5-21.5T730-340q-12 0-21 8.5t-9 21.5q0 12 9 21t21 9Zm-320-50q-22 0-38-8t-28-16q-8-5-16.5-10.5T310-370q-11 0-20.5 6.5T272-350l-43-42q12-12 33-25t48-13q22 0 38.5 8.5T377-405q11 7 18 11t15 4q11 0 20.5-6.5T448-410l43 42q-12 12-33 25t-48 13Zm0-200q-22 0-38-8t-28-16q-8-5-16.5-10.5T310-570q-11 0-20.5 6.5T272-550l-43-42q12-12 33-25t48-13q22 0 38.5 8.5T377-605q11 7 18 11t15 4q11 0 20.5-6.5T448-610l43 42q-12 12-33 25t-48 13Zm230 310v-520 520Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoMicrowave;
