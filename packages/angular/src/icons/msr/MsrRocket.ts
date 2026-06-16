import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-rocket",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrRocket {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M326-211q-13-38-22.5-77T287-367l-67 45v154l106-43Zm144-585q-69 75-99.5 159.5T340-440q0 44 12 102.5T386-220h188q22-59 34-117.5T620-440q0-112-30.5-196.5T490-796q-2.17-2-4.69-3-2.53-1-5.42-1t-5.34 1q-2.45 1-4.55 3Zm9.91 346Q451-450 430.5-470.59q-20.5-20.59-20.5-49.5Q410-549 430.59-569.5q20.59-20.5 49.5-20.5Q509-590 529.5-569.41q20.5 20.59 20.5 49.5Q550-491 529.41-470.5q-20.59 20.5-49.5 20.5ZM634-211l106 43v-154l-67-45q-7 40-16.5 79T634-211ZM502-869q91 87 134.5 192T680-440v5l93 63q12.75 8.05 19.88 21.21T800-323v199q0 15.87-13 24.93Q774-90 759-96l-159-64H360L201-96q-15 6-28-3.07-13-9.07-13-24.93v-199q0-14.63 7.13-27.79T187-372l93-63v-5q0-132 43.5-237T458-869q5-5 10.75-7t11.5-2q5.75 0 11.25 2t10.5 7Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrRocket;
