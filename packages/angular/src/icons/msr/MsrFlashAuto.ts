import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-flash-auto",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrFlashAuto {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m666-626-37 95q-3 8-9.56 12.5Q612.88-514 605-514q-13.59 0-21.3-11.5Q576-537 581-550l114-291q6-16 18.5-26t29.5-11q17-1 30 10t19 27l114 292q5 12.9-2.53 23.95Q895.94-514 882.23-514q-8.23 0-14.73-4.5T858-531l-37-95H666Zm16-47h123l-54-148h-15l-54 148ZM260-272l186-268H320l81-280H140v360h120v188Zm-43.9 140.84q-6.9-2.16-11.5-7.55T200-152v-248h-60q-24.75 0-42.37-17.62T80-460v-360q0-24.75 17.63-42.37T140-880h278q23 0 38 18.5t8 41.5l-64 220h74q26.87 0 39.94 24Q527-552 511-529L241-139q-5 7-11.5 8.5t-13.4-0.66ZM260-460H140h120Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrFlashAuto;
