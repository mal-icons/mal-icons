import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-flash-on",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrFlashOn {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m460-272 186-268H520l81-280H340v360h120v188Zm251-257L441-139q-5 7-11.5 8.5t-13.4-0.66q-6.9-2.16-11.5-7.55T400-152v-248h-60q-24.75 0-42.37-17.62T280-460v-360q0-24.75 17.63-42.37T340-880h278q23 0 38 18.5t8 41.5l-64 220h74q26.87 0 39.94 24Q727-552 711-529Zm-251 69H340h120Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrFlashOn;
